/**
 * Health Check API Endpoint
 *
 * Used by Docker, K8s, and load balancers to verify service health
 * Checks: Database, Redis, and core services
 */

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import Redis from 'ioredis';

// Create Redis client for health check
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: 1,
  retryStrategy: () => null, // Don't retry on health checks
});

export const dynamic = 'force-dynamic';

export async function GET() {
  const checks = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    services: {
      database: 'unknown',
      redis: 'unknown',
      storage: 'unknown',
    },
    uptime: process.uptime(),
  };

  try {
    // ============================================
    // 1. Database Health Check
    // ============================================
    try {
      await prisma.$queryRaw`SELECT 1`;
      checks.services.database = 'healthy';
    } catch (error) {
      console.error('Database health check failed:', error);
      checks.services.database = 'unhealthy';
      checks.status = 'degraded';
    }

    // ============================================
    // 2. Redis Health Check
    // ============================================
    try {
      await redis.ping();
      checks.services.redis = 'healthy';
    } catch (error) {
      console.error('Redis health check failed:', error);
      checks.services.redis = 'unhealthy';
      checks.status = 'degraded';
    }

    // ============================================
    // 3. Storage Health Check (R2/S3)
    // ============================================
    try {
      // Simple check - just verify credentials exist
      if (process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY) {
        checks.services.storage = 'configured';
      } else {
        checks.services.storage = 'not-configured';
      }
    } catch (error) {
      checks.services.storage = 'error';
    }

    // ============================================
    // Determine overall status
    // ============================================
    const criticalServicesDown = [
      checks.services.database,
      checks.services.redis,
    ].some((service) => service === 'unhealthy');

    if (criticalServicesDown) {
      checks.status = 'unhealthy';
      return NextResponse.json(checks, { status: 503 });
    }

    // Return success
    return NextResponse.json(checks, { status: 200 });
  } catch (error) {
    console.error('Health check error:', error);

    return NextResponse.json(
      {
        status: 'unhealthy',
        error: 'Health check failed',
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}

// ============================================
// Readiness Check (K8s)
// ============================================
export async function HEAD() {
  try {
    // Quick check - just verify database connection
    await prisma.$queryRaw`SELECT 1`;
    return new NextResponse(null, { status: 200 });
  } catch {
    return new NextResponse(null, { status: 503 });
  }
}

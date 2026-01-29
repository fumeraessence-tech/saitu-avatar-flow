/**
 * Photo-to-DNA API Endpoint
 *
 * Upload a photo and get instant Character DNA
 * Competitive feature with Arcads, Weavy AI, Higgsfield
 *
 * POST /api/v1/characters/from-image
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { photoExtraction } from '@/lib/dna/photo-extraction';
import { DNAValidator } from '@/lib/dna/validator';
import { prisma } from '@/lib/db';
import sharp from 'sharp';

export const maxDuration = 60; // 60 seconds timeout
export const runtime = 'nodejs';

interface PhotoUploadRequest {
  image: string; // Base64 encoded image
  name?: string;
  enhanceDetails?: boolean;
  generateVariations?: boolean;
  saveCharacter?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    // ============================================
    // 1. Authentication
    // ============================================
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // ============================================
    // 2. Parse Request
    // ============================================
    const body: PhotoUploadRequest = await request.json();

    if (!body.image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // ============================================
    // 3. Decode Image
    // ============================================
    const imageData = body.image.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(imageData, 'base64');

    // Validate image
    try {
      const metadata = await sharp(imageBuffer).metadata();

      // Check size limits (max 10MB)
      if (imageBuffer.length > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Image too large. Maximum size is 10MB' },
          { status: 400 }
        );
      }

      // Check dimensions
      if (
        !metadata.width ||
        !metadata.height ||
        metadata.width < 256 ||
        metadata.height < 256
      ) {
        return NextResponse.json(
          { error: 'Image too small. Minimum dimensions: 256x256' },
          { status: 400 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid image format' },
        { status: 400 }
      );
    }

    // ============================================
    // 4. Extract DNA from Photo
    // ============================================
    console.log('Extracting DNA from photo...');
    const extractionResult = await photoExtraction.extractFromPhoto(
      imageBuffer,
      {
        enhanceDetails: body.enhanceDetails ?? true,
        generateVariations: body.generateVariations ?? false,
        matchSkinTone: true,
        preserveSymmetry: true,
      }
    );

    // ============================================
    // 5. Validate DNA
    // ============================================
    const validationResult = DNAValidator.validate(extractionResult.dna);

    if (!validationResult.isValid) {
      console.error('DNA validation failed:', validationResult.errors);
      return NextResponse.json(
        {
          error: 'Failed to extract valid DNA from image',
          details: validationResult.errors,
        },
        { status: 400 }
      );
    }

    // ============================================
    // 6. Sanitize DNA
    // ============================================
    const sanitizedDNA = DNAValidator.sanitize(extractionResult.dna);

    // ============================================
    // 7. Save Character (if requested)
    // ============================================
    let characterId: string | null = null;

    if (body.saveCharacter !== false) {
      // Get user from database
      const user = await prisma.user.findUnique({
        where: { clerkId: userId },
      });

      if (!user) {
        // Create user if doesn't exist
        const newUser = await prisma.user.create({
          data: {
            clerkId: userId,
            email: '', // Will be updated by Clerk webhook
          },
        });

        const character = await prisma.character.create({
          data: {
            userId: newUser.id,
            name: body.name || 'Photo Character',
            dna: sanitizedDNA as any,
            dnaVersion: '1.0',
            sourcePhoto: body.image,
          },
        });

        characterId = character.id;
      } else {
        const character = await prisma.character.create({
          data: {
            userId: user.id,
            name: body.name || 'Photo Character',
            dna: sanitizedDNA as any,
            dnaVersion: '1.0',
            sourcePhoto: body.image,
          },
        });

        characterId = character.id;
      }

      console.log(`Character created: ${characterId}`);
    }

    // ============================================
    // 8. Return Result
    // ============================================
    return NextResponse.json(
      {
        success: true,
        characterId,
        dna: sanitizedDNA,
        analysis: {
          confidence: extractionResult.confidence,
          qualityScore: extractionResult.qualityScore,
          detectedFeatures: extractionResult.detectedFeatures,
        },
        recommendations: extractionResult.recommendations || [],
        warnings: extractionResult.warnings || [],
        validation: {
          isValid: validationResult.isValid,
          warnings: validationResult.warnings,
          suggestions: validationResult.suggestions,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Photo-to-DNA extraction failed:', error);

    return NextResponse.json(
      {
        error: 'Failed to process image',
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

// ============================================
// OPTIONS (CORS)
// ============================================
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

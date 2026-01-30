'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Stats {
  totalCharacters: number;
  totalVideos: number;
  videosToday: number;
  storageUsed: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalCharacters: 0,
    totalVideos: 0,
    videosToday: 0,
    storageUsed: '0 GB',
  });

  useEffect(() => {
    // In production, fetch real stats from API
    setStats({
      totalCharacters: 12,
      totalVideos: 47,
      videosToday: 3,
      storageUsed: '2.4 GB',
    });
  }, []);

  const statCards = [
    {
      label: 'Total Characters',
      value: stats.totalCharacters,
      icon: '👤',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Total Videos',
      value: stats.totalVideos,
      icon: '🎬',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Videos Today',
      value: stats.videosToday,
      icon: '📊',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      label: 'Storage Used',
      value: stats.storageUsed,
      icon: '💾',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const quickActions = [
    {
      title: 'Create Character',
      description: 'Upload a photo and generate AI avatar',
      icon: '✨',
      href: '/dashboard/characters',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Generate Video',
      description: 'Create UGC video with your characters',
      icon: '🎥',
      href: '/dashboard/videos',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'DNA Builder',
      description: 'Customize character features manually',
      icon: '🧬',
      href: '/dashboard/dna-builder',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome to AvatarFlow - Create ultra-realistic AI avatars
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center text-2xl`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${action.gradient} rounded-lg flex items-center justify-center text-2xl mb-4`}
              >
                {action.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-500 text-sm">{action.description}</p>
              <div className="mt-4 flex items-center text-purple-600 font-medium">
                Get started
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">
                    Character created from photo
                  </p>
                  <p className="text-sm text-gray-500">{i} hours ago</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">View →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function CampaignsPage() {
  const campaigns = [
    { id: '1', name: 'iPhone 15 Launch', videos: 24, views: '1.2M', engagement: '8.4%', ctr: '3.2%', status: 'active' },
    { id: '2', name: 'Summer Sale 2026', videos: 18, views: '845K', engagement: '6.8%', ctr: '2.9%', status: 'active' },
    { id: '3', name: 'Black Friday Prep', videos: 12, views: '520K', engagement: '9.1%', ctr: '4.1%', status: 'paused' },
  ];

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-sm text-gray-500">Track performance and optimize your video campaigns</p>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
          + New Campaign
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total Views', value: '2.6M', change: '+12.5%', icon: '👁️' },
          { label: 'Avg Engagement', value: '8.1%', change: '+2.3%', icon: '❤️' },
          { label: 'Click Rate', value: '3.4%', change: '+0.8%', icon: '🔗' },
          { label: 'Total Videos', value: '54', change: '+18', icon: '🎬' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Active Campaigns</h3>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Videos</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Views</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">CTR</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 text-sm">{campaign.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{campaign.videos}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{campaign.views}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{campaign.engagement}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{campaign.ctr}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                      View Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

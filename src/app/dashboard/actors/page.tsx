'use client';

import { useState } from 'react';

export default function ActorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    gender: 'all',
    ageRange: 'all',
    ethnicity: 'all',
    style: 'all',
  });

  const actors = Array.from({ length: 12 }, (_, i) => ({
    id: `actor-${i + 1}`,
    name: `Actor ${i + 1}`,
    gender: i % 2 === 0 ? 'Female' : 'Male',
    age: 20 + (i * 3),
    ethnicity: ['Caucasian', 'Asian', 'African', 'Hispanic', 'South Asian'][i % 5],
    style: ['Professional', 'Casual', 'Trendy'][i % 3],
    preview: `https://api.dicebear.com/7.x/avataaars/svg?seed=Actor${i}`,
    videosCount: Math.floor(Math.random() * 50) + 5,
    rating: (4 + Math.random()).toFixed(1),
  }));

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Actor Library</h1>
          <p className="text-sm text-gray-500">Browse 1000+ ultra-realistic AI avatars</p>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
          + Create Custom Actor
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="grid grid-cols-5 gap-4">
          {/* Search */}
          <div className="col-span-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search actors by name, style, or characteristics..."
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            />
          </div>

          {/* Gender Filter */}
          <div>
            <select
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            >
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
            </select>
          </div>

          {/* Age Range Filter */}
          <div>
            <select
              value={filters.ageRange}
              onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            >
              <option value="all">All Ages</option>
              <option value="18-25">18-25 years</option>
              <option value="26-35">26-35 years</option>
              <option value="36-50">36-50 years</option>
              <option value="50+">50+ years</option>
            </select>
          </div>

          {/* Ethnicity Filter */}
          <div>
            <select
              value={filters.ethnicity}
              onChange={(e) => setFilters({ ...filters, ethnicity: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            >
              <option value="all">All Ethnicities</option>
              <option value="caucasian">Caucasian</option>
              <option value="asian">Asian</option>
              <option value="african">African</option>
              <option value="hispanic">Hispanic</option>
              <option value="south-asian">South Asian</option>
              <option value="middle-eastern">Middle Eastern</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex items-center space-x-2 mt-4">
          <span className="text-xs text-gray-500">Active filters:</span>
          {filters.gender !== 'all' && (
            <button
              onClick={() => setFilters({ ...filters, gender: 'all' })}
              className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium hover:bg-violet-200"
            >
              {filters.gender} ×
            </button>
          )}
          {filters.ageRange !== 'all' && (
            <button
              onClick={() => setFilters({ ...filters, ageRange: 'all' })}
              className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium hover:bg-violet-200"
            >
              Age: {filters.ageRange} ×
            </button>
          )}
          {filters.ethnicity !== 'all' && (
            <button
              onClick={() => setFilters({ ...filters, ethnicity: 'all' })}
              className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium hover:bg-violet-200"
            >
              {filters.ethnicity} ×
            </button>
          )}
        </div>
      </div>

      {/* Actors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
          >
            {/* Actor Image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <img
                src={actor.preview}
                alt={actor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <button className="w-full px-3 py-2 bg-white text-gray-900 rounded-lg text-xs font-medium hover:bg-gray-100">
                  Use in Studio
                </button>
              </div>
              {/* Rating Badge */}
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg flex items-center space-x-1">
                <span className="text-yellow-400 text-xs">⭐</span>
                <span className="text-white text-xs font-medium">{actor.rating}</span>
              </div>
            </div>

            {/* Actor Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 truncate">{actor.name}</h3>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{actor.age}y · {actor.gender}</span>
                <span>{actor.videosCount} videos</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                  {actor.ethnicity}
                </span>
                <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded text-xs">
                  {actor.style}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-4">
        <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
          Load More Actors
        </button>
      </div>
    </div>
  );
}

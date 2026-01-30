'use client';

import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  characterName: string;
  thumbnailUrl: string;
  duration: string;
  createdAt: string;
  status: 'completed' | 'processing' | 'failed';
}

export default function VideosPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [script, setScript] = useState('');
  const [productName, setProductName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock data
  const [videos] = useState<Video[]>([
    {
      id: '1',
      title: 'Product Demo - iPhone 15',
      characterName: 'Sarah Johnson',
      thumbnailUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      duration: '0:45',
      createdAt: '2 hours ago',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Testimonial - Fitness App',
      characterName: 'Mike Chen',
      thumbnailUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      duration: '1:20',
      createdAt: '1 day ago',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Product Review - Smart Watch',
      characterName: 'Emma Davis',
      thumbnailUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      duration: '0:00',
      createdAt: 'Just now',
      status: 'processing',
    },
  ]);

  const characters = [
    { id: '1', name: 'Sarah Johnson' },
    { id: '2', name: 'Mike Chen' },
    { id: '3', name: 'Emma Davis' },
  ];

  const handleGenerateVideo = async () => {
    if (!selectedCharacter || !script || !productName) return;

    setIsGenerating(true);

    // Simulate video generation
    setTimeout(() => {
      setIsGenerating(false);
      setShowCreateModal(false);
      setSelectedCharacter('');
      setScript('');
      setProductName('');
    }, 3000);
  };

  const getStatusColor = (status: Video['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Videos</h1>
          <p className="text-gray-500 mt-1">
            Generate UGC videos with AI avatars
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
        >
          + Generate Video
        </button>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
              <div className="text-6xl">🎬</div>
              {video.status === 'completed' && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all">
                    ▶
                  </button>
                </div>
              )}
              {video.status === 'processing' && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg
                      className="animate-spin h-12 w-12 mx-auto mb-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <p className="text-sm">Processing...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    video.status
                  )}`}
                >
                  {video.status}
                </span>
                <span className="text-sm text-gray-500">{video.duration}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{video.title}</h3>
              <p className="text-sm text-gray-500 mb-3">
                {video.characterName}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{video.createdAt}</span>
                {video.status === 'completed' && (
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Download
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Video Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Generate New Video
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Character Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Character
                </label>
                <select
                  value={selectedCharacter}
                  onChange={(e) => setSelectedCharacter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Choose a character...</option>
                  {characters.map((char) => (
                    <option key={char.id} value={char.id}>
                      {char.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g., iPhone 15 Pro Max"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Script */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video Script
                </label>
                <textarea
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder="Write what the character should say..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Recommended: 30-90 seconds of speech
                </p>
              </div>

              {/* AI Model Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video AI Model
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Kling AI', 'Runway Gen-3', 'Luma AI'].map((model) => (
                    <button
                      key={model}
                      className="px-4 py-3 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
                    >
                      <p className="font-medium text-gray-900">{model}</p>
                      <p className="text-xs text-gray-500 mt-1">Best quality</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateVideo}
                disabled={!selectedCharacter || !script || !productName || isGenerating}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Generating Video...
                  </span>
                ) : (
                  'Generate Video'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

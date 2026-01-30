'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [selectedModel, setSelectedModel] = useState('kling-2.6');
  const [selectedActor, setSelectedActor] = useState<string | null>(null);
  const [script, setScript] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const models = [
    { id: 'sora-2', name: 'Sora 2', badge: 'NEW' },
    { id: 'kling-2.6', name: 'Kling 2.6', badge: 'BEST' },
    { id: 'veo-3.1', name: 'Veo 3.1', badge: null },
    { id: 'runway-gen4', name: 'Runway Gen-4', badge: null },
    { id: 'luma-ray2', name: 'Luma Ray 2', badge: null },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header with Model Selector */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center space-x-4">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
            >
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name} {model.badge ? `(${model.badge})` : ''}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-black"
            >
              ⚙️ Settings
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-500">Credits: 24</span>
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900">
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6">
          {/* Settings Panel (Collapsible) */}
          {showSettings && (
            <div className="mb-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Video Duration
                  </label>
                  <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                    <option>5 seconds</option>
                    <option>10 seconds</option>
                    <option>15 seconds</option>
                    <option>30 seconds</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Aspect Ratio
                  </label>
                  <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                    <option>16:9 (Landscape)</option>
                    <option>9:16 (Portrait)</option>
                    <option>1:1 (Square)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Camera Movement
                  </label>
                  <select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                    <option>Static</option>
                    <option>Zoom In</option>
                    <option>Zoom Out</option>
                    <option>Pan Left</option>
                    <option>Pan Right</option>
                    <option>360° Orbit</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Main Input Area */}
          <div className="space-y-6">
            {/* Script Input */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                What should your AI character say?
              </label>
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Type your video script here... AI will generate a realistic video with lip-sync and natural movements."
                rows={8}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">
                  {script.length} characters · ~{Math.ceil(script.length / 150)} seconds
                </span>
                <button className="text-xs text-gray-600 hover:text-black">
                  Use template
                </button>
              </div>
            </div>

            {/* Actor Selection */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Select an AI Actor
              </label>
              <div className="grid grid-cols-6 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedActor(`actor-${i}`)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedActor === `actor-${i}`
                        ? 'border-black'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Actor${i}`}
                      alt={`Actor ${i}`}
                      className="w-full h-full object-cover bg-gray-100"
                    />
                  </button>
                ))}
              </div>
              <button className="mt-3 text-xs text-gray-600 hover:text-black">
                Browse all 1000+ actors →
              </button>
            </div>

            {/* Preview */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Preview
              </label>
              <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">🎬</div>
                  <p className="text-sm text-gray-500">Video preview will appear here</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Using: {models.find((m) => m.id === selectedModel)?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

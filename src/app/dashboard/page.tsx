'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [script, setScript] = useState('');
  const [selectedModel, setSelectedModel] = useState('kling');
  const [selectedActor, setSelectedActor] = useState<number | null>(null);

  const models = [
    { id: 'sora', name: 'Sora 2', speed: 'Slow', quality: 'Ultra' },
    { id: 'kling', name: 'Kling 2.6', speed: 'Fast', quality: 'High' },
    { id: 'veo', name: 'Veo 3.1', speed: 'Medium', quality: 'High' },
    { id: 'runway', name: 'Runway Gen-4', speed: 'Fast', quality: 'High' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Create Video</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">24 credits</span>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors">
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Bento Grid Layout */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
          {/* Model Selector - spans 12 cols */}
          <div className="col-span-12 bg-white rounded-xl border border-gray-200 p-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">Model</label>
            <div className="grid grid-cols-4 gap-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedModel === model.id
                      ? 'border-black bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-sm text-gray-900">{model.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{model.speed}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{model.quality}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Script Input - spans 8 cols */}
          <div className="col-span-8 bg-white rounded-xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-3">Script</label>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              placeholder="Enter what your AI character should say..."
              rows={12}
              className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-500">{script.length} chars</span>
              <button className="text-xs text-gray-600 hover:text-black">Use template</button>
            </div>
          </div>

          {/* Settings - spans 4 cols */}
          <div className="col-span-4 space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-sm font-medium text-gray-700 mb-3">Duration</label>
              <select className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option>5 seconds</option>
                <option>10 seconds</option>
                <option>15 seconds</option>
                <option>30 seconds</option>
              </select>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-sm font-medium text-gray-700 mb-3">Ratio</label>
              <div className="grid grid-cols-3 gap-2">
                {['16:9', '9:16', '1:1'].map((ratio) => (
                  <button
                    key={ratio}
                    className="px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:border-black transition-colors"
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actor Selection - spans 12 cols */}
          <div className="col-span-12 bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Select Actor</label>
              <button className="text-xs text-gray-600 hover:text-black">View all</button>
            </div>
            <div className="grid grid-cols-8 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedActor(i)}
                  className={`aspect-square rounded-lg border-2 transition-all overflow-hidden ${
                    selectedActor === i
                      ? 'border-black ring-2 ring-black ring-offset-2'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                </button>
              ))}
            </div>
          </div>

          {/* Preview - spans 12 cols */}
          <div className="col-span-12 bg-white rounded-xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-3">Preview</label>
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-500">No preview available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

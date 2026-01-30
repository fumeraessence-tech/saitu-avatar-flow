'use client';

import { useState } from 'react';

export default function StudioPage() {
  const [selectedModel, setSelectedModel] = useState('kling-2.6');
  const [selectedActor, setSelectedActor] = useState<string | null>(null);
  const [script, setScript] = useState('');
  const [cameraMovement, setCameraMovement] = useState('none');

  const aiModels = [
    { id: 'sora-2', name: 'Sora 2', provider: 'OpenAI', quality: 'Premium', speed: 'Slow', badge: 'NEW' },
    { id: 'kling-2.6', name: 'Kling 2.6', provider: 'Kuaishou', quality: 'Excellent', speed: 'Fast', badge: 'POPULAR' },
    { id: 'veo-3.1', name: 'Veo 3.1', provider: 'Google', quality: 'Premium', speed: 'Medium', badge: null },
    { id: 'runway-gen4', name: 'Runway Gen-4', provider: 'Runway', quality: 'High', speed: 'Fast', badge: null },
    { id: 'luma-ray2', name: 'Luma Ray 2', provider: 'Luma AI', quality: 'High', speed: 'Fast', badge: null },
  ];

  const cameraPresets = [
    { id: 'none', name: 'Static', icon: '📷' },
    { id: 'zoom-in', name: 'Zoom In', icon: '🔍' },
    { id: 'zoom-out', name: 'Zoom Out', icon: '📤' },
    { id: 'pan-left', name: 'Pan Left', icon: '⬅️' },
    { id: 'pan-right', name: 'Pan Right', icon: '➡️' },
    { id: 'orbit', name: '360° Orbit', icon: '🔄' },
    { id: 'bullet-time', name: 'Bullet Time', icon: '⚡' },
    { id: 'crash-zoom', name: 'Crash Zoom', icon: '💥' },
  ];

  const actors = [
    { id: '1', name: 'Sarah Williams', age: 28, ethnicity: 'Caucasian', preview: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { id: '2', name: 'Marcus Chen', age: 32, ethnicity: 'Asian', preview: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
    { id: '3', name: 'Aisha Patel', age: 25, ethnicity: 'South Asian', preview: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha' },
    { id: '4', name: 'Carlos Rodriguez', age: 35, ethnicity: 'Hispanic', preview: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos' },
  ];

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Video Studio</h1>
          <p className="text-sm text-gray-500">Create cinematic AI videos with advanced controls</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
            Save Draft
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
            Generate Video
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel - Configuration */}
        <div className="col-span-7 space-y-6">
          {/* AI Model Selection */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">AI Video Model</h3>
            <div className="grid grid-cols-1 gap-3">
              {aiModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                    selectedModel === model.id
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm font-bold text-gray-900">{model.name}</h4>
                        {model.badge && (
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            model.badge === 'NEW' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {model.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{model.provider}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-xs text-gray-600">Quality: <span className="font-medium">{model.quality}</span></p>
                      <p className="text-xs text-gray-600">Speed: <span className="font-medium">{model.speed}</span></p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Script Input */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Your Script</h3>
              <button className="text-xs text-violet-600 hover:text-violet-700 font-medium">
                ✨ AI Enhance
              </button>
            </div>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              placeholder="Enter your video script here... AI will suggest improvements and generate engaging content."
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-gray-500">{script.length} characters · ~{Math.ceil(script.length / 150)} seconds</p>
              <button className="text-xs text-gray-600 hover:text-gray-900">Load Template</button>
            </div>
          </div>

          {/* Cinema Controls */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Cinematic Camera</h3>
            <div className="grid grid-cols-4 gap-2">
              {cameraPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setCameraMovement(preset.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    cameraMovement === preset.id
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{preset.icon}</div>
                  <p className="text-xs font-medium text-gray-900">{preset.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Advanced Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Video Duration
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>5 seconds</option>
                  <option>10 seconds</option>
                  <option>15 seconds</option>
                  <option>30 seconds</option>
                  <option>60 seconds</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Aspect Ratio
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['16:9', '9:16', '1:1', '4:5'].map((ratio) => (
                    <button
                      key={ratio}
                      className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium hover:border-violet-500 transition-all"
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Actor Selection & Preview */}
        <div className="col-span-5 space-y-6">
          {/* Preview */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Preview</h3>
            <div className="aspect-video bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-xl flex items-center justify-center">
              {selectedActor ? (
                <div className="text-center">
                  <div className="text-6xl mb-3">🎬</div>
                  <p className="text-sm text-gray-600">Video preview will appear here</p>
                  <p className="text-xs text-gray-500 mt-1">Selected: {actors.find(a => a.id === selectedActor)?.name}</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-3">📹</div>
                  <p className="text-sm text-gray-600">Select an actor to preview</p>
                </div>
              )}
            </div>
          </div>

          {/* Actor Selection */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Select Actor</h3>
              <button className="text-xs text-violet-600 hover:text-violet-700 font-medium">
                View All (1000+)
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {actors.map((actor) => (
                <button
                  key={actor.id}
                  onClick={() => setSelectedActor(actor.id)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    selectedActor === actor.id
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-2 overflow-hidden">
                    <img src={actor.preview} alt={actor.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-semibold text-gray-900">{actor.name}</h4>
                  <p className="text-xs text-gray-500">{actor.age}y · {actor.ethnicity}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Generation Settings */}
          <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-900">Ready to Generate</h4>
              <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-700">1 Credit</span>
            </div>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Model:</span>
                <span className="font-medium text-gray-900">{aiModels.find(m => m.id === selectedModel)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Camera:</span>
                <span className="font-medium text-gray-900">{cameraPresets.find(c => c.id === cameraMovement)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Time:</span>
                <span className="font-medium text-gray-900">2-3 minutes</span>
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl hover:shadow-lg transition-all font-medium text-sm">
              🎬 Generate Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

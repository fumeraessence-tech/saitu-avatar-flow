'use client';

import { useState } from 'react';

export default function LipsyncPage() {
  const [audioSource, setAudioSource] = useState<'upload' | 'text-to-speech'>('text-to-speech');
  const [script, setScript] = useState('');

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lipsync Studio</h1>
          <p className="text-sm text-gray-500">Create perfect talking head videos with advanced lip-sync</p>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
          Generate Video
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel */}
        <div className="col-span-7 space-y-6">
          {/* Audio Source */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Audio Source</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={() => setAudioSource('text-to-speech')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  audioSource === 'text-to-speech'
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">📝</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Text-to-Speech</h4>
                <p className="text-xs text-gray-500">Type script and select voice</p>
              </button>
              <button
                onClick={() => setAudioSource('upload')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  audioSource === 'upload'
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">🎤</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Upload Audio</h4>
                <p className="text-xs text-gray-500">Use your own voice recording</p>
              </button>
            </div>

            {audioSource === 'text-to-speech' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Script
                  </label>
                  <textarea
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    placeholder="Enter what the character should say..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">{script.length} characters · ~{Math.ceil(script.length / 150)} seconds</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Voice Style
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm">
                    <option>Professional - Female (Sarah)</option>
                    <option>Professional - Male (David)</option>
                    <option>Friendly - Female (Emily)</option>
                    <option>Friendly - Male (James)</option>
                    <option>Energetic - Female (Luna)</option>
                    <option>Energetic - Male (Alex)</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-violet-500 transition-colors cursor-pointer">
                <div className="text-5xl mb-3">🎵</div>
                <p className="text-sm text-gray-600 mb-2">Drop audio file or click to upload</p>
                <p className="text-xs text-gray-400">MP3, WAV up to 10MB · Max 60 seconds</p>
              </div>
            )}
          </div>

          {/* Advanced Lipsync Settings */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Lipsync Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Lip Movement Intensity
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="70"
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">70%</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Facial Expression
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'neutral', name: 'Neutral', emoji: '😐' },
                    { id: 'happy', name: 'Happy', emoji: '😊' },
                    { id: 'serious', name: 'Serious', emoji: '😌' },
                    { id: 'excited', name: 'Excited', emoji: '😄' },
                  ].map((expr) => (
                    <button
                      key={expr.id}
                      className="p-3 rounded-lg border-2 border-gray-200 hover:border-violet-500 transition-all"
                    >
                      <div className="text-2xl mb-1">{expr.emoji}</div>
                      <p className="text-xs font-medium text-gray-900">{expr.name}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" defaultChecked />
                  <span className="text-xs text-gray-700">Add natural head movements</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" defaultChecked />
                  <span className="text-xs text-gray-700">Add eye blinks and micro-expressions</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-5 space-y-6">
          {/* Character Selection */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Select Character</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden hover:ring-2 hover:ring-violet-500 transition-all"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Lipsync${i}`}
                    alt={`Character ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <button className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50">
              Browse All Characters
            </button>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Preview</h3>
            <div className="aspect-video bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3">💬</div>
                <p className="text-sm text-gray-600">Lipsync preview</p>
                <p className="text-xs text-gray-500 mt-1">Character will speak here</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7z" />
                </svg>
              </button>
              <button className="p-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quality Settings */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quality Settings</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Video Quality
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>4K Ultra HD</option>
                  <option>1080p Full HD</option>
                  <option>720p HD</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Background
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-200 hover:border-violet-500 transition-all" />
                  <button className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg border-2 border-gray-200 hover:border-violet-500 transition-all" />
                  <button className="aspect-square bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-lg border-2 border-gray-200 hover:border-violet-500 transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* Generate */}
          <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-900">Ready to Generate</h4>
              <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-700">1 Credit</span>
            </div>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium text-gray-900">{Math.ceil(script.length / 150)} seconds</span>
              </div>
              <div className="flex justify-between">
                <span>Quality:</span>
                <span className="font-medium text-gray-900">4K Ultra HD</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Time:</span>
                <span className="font-medium text-gray-900">2-3 minutes</span>
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl hover:shadow-lg transition-all font-medium text-sm">
              💬 Generate Lipsync Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

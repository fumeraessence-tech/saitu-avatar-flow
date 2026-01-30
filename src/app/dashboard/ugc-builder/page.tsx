'use client';

import { useState } from 'react';

export default function UGCBuilderPage() {
  const [productName, setProductName] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [ugcStyle, setUgcStyle] = useState('testimonial');

  const ugcStyles = [
    { id: 'testimonial', name: 'Testimonial', description: 'Personal product review', icon: '💬', example: 'I love this product!' },
    { id: 'unboxing', name: 'Unboxing', description: 'First impressions reveal', icon: '📦', example: 'Let me show you what\'s inside' },
    { id: 'tutorial', name: 'Tutorial', description: 'How-to demonstration', icon: '📚', example: 'Here\'s how to use it' },
    { id: 'comparison', name: 'Comparison', description: 'Before/after showcase', icon: '⚖️', example: 'Before vs After' },
  ];

  const toneOptions = [
    { id: 'excited', name: 'Excited', emoji: '🎉' },
    { id: 'professional', name: 'Professional', emoji: '💼' },
    { id: 'casual', name: 'Casual', emoji: '😊' },
    { id: 'dramatic', name: 'Dramatic', emoji: '🎭' },
  ];

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">UGC Builder</h1>
          <p className="text-sm text-gray-500">Create authentic user-generated content videos</p>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
          Generate UGC Video
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel - Configuration */}
        <div className="col-span-7 space-y-6">
          {/* Product Information */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g., iPhone 15 Pro Max"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Product URL (optional)
                </label>
                <input
                  type="url"
                  value={productUrl}
                  onChange={(e) => setProductUrl(e.target.value)}
                  placeholder="https://example.com/product"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Product Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-violet-500 transition-colors cursor-pointer">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm text-gray-600 mb-1">Upload product image</p>
                  <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* UGC Style Selection */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">UGC Style</h3>
            <div className="grid grid-cols-2 gap-3">
              {ugcStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setUgcStyle(style.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    ugcStyle === style.id
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{style.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{style.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{style.description}</p>
                      <p className="text-xs text-violet-600 italic">"{style.example}"</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tone & Voice */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Tone & Voice</h3>
            <div className="grid grid-cols-4 gap-2">
              {toneOptions.map((tone) => (
                <button
                  key={tone.id}
                  className="p-3 rounded-lg border-2 border-gray-200 hover:border-violet-500 transition-all"
                >
                  <div className="text-2xl mb-1">{tone.emoji}</div>
                  <p className="text-xs font-medium text-gray-900">{tone.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Script Customization */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Script</h3>
              <button className="text-xs text-violet-600 hover:text-violet-700 font-medium">
                ✨ Auto-Generate
              </button>
            </div>
            <textarea
              placeholder="AI will generate an authentic UGC script based on your inputs..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-gray-500">Add product benefits and key features</p>
              <button className="text-xs text-gray-600 hover:text-gray-900">Add Talking Points</button>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview & Settings */}
        <div className="col-span-5 space-y-6">
          {/* Preview */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Preview</h3>
            <div className="aspect-[9/16] bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3">📱</div>
                <p className="text-sm text-gray-600">UGC video preview</p>
                <p className="text-xs text-gray-500 mt-1">Vertical format (9:16)</p>
              </div>
            </div>
          </div>

          {/* Format Settings */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Format Settings</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['TikTok', 'Instagram', 'YouTube'].map((platform) => (
                    <button
                      key={platform}
                      className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium hover:border-violet-500 transition-all"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Background Music
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Upbeat & Energetic</option>
                  <option>Calm & Professional</option>
                  <option>Trendy & Modern</option>
                  <option>No Music</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Captions
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" defaultChecked />
                  <span className="text-xs text-gray-700">Auto-generate captions</span>
                </label>
              </div>
            </div>
          </div>

          {/* AI Actor for UGC */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Select UGC Creator</h3>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden hover:ring-2 hover:ring-violet-500 transition-all"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=UGC${i}`}
                    alt={`Creator ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6 border border-violet-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-900">Ready to Generate</h4>
              <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-700">1 Credit</span>
            </div>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Style:</span>
                <span className="font-medium text-gray-900 capitalize">{ugcStyle}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium text-gray-900">15-30 seconds</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Time:</span>
                <span className="font-medium text-gray-900">3-4 minutes</span>
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl hover:shadow-lg transition-all font-medium text-sm">
              ✨ Generate UGC Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

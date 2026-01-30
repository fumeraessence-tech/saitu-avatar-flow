'use client';

import { useState } from 'react';

interface DNAAttribute {
  category: string;
  attributes: {
    name: string;
    value: number | string;
    type: 'slider' | 'select' | 'color';
    options?: string[];
    min?: number;
    max?: number;
  }[];
}

export default function DNABuilderPage() {
  const [characterName, setCharacterName] = useState('Custom Character');

  const dnaCategories: DNAAttribute[] = [
    {
      category: 'Facial Structure',
      attributes: [
        {
          name: 'Face Shape',
          value: 'oval',
          type: 'select',
          options: ['oval', 'round', 'square', 'heart', 'diamond'],
        },
        { name: 'Jawline Definition', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Cheekbone Prominence', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Forehead Height', value: 50, type: 'slider', min: 0, max: 100 },
      ],
    },
    {
      category: 'Eyes',
      attributes: [
        {
          name: 'Eye Shape',
          value: 'almond',
          type: 'select',
          options: ['almond', 'round', 'hooded', 'upturned', 'downturned'],
        },
        { name: 'Eye Size', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Eye Spacing', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Eye Color', value: '#3B82F6', type: 'color' },
      ],
    },
    {
      category: 'Nose',
      attributes: [
        {
          name: 'Nose Shape',
          value: 'straight',
          type: 'select',
          options: ['straight', 'aquiline', 'button', 'roman'],
        },
        { name: 'Nose Bridge Width', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Nose Length', value: 50, type: 'slider', min: 0, max: 100 },
      ],
    },
    {
      category: 'Mouth & Lips',
      attributes: [
        { name: 'Lip Thickness', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Lip Width', value: 50, type: 'slider', min: 0, max: 100 },
        { name: 'Lip Color', value: '#EF4444', type: 'color' },
      ],
    },
    {
      category: 'Hair',
      attributes: [
        {
          name: 'Hair Texture',
          value: 'straight',
          type: 'select',
          options: ['straight', 'wavy', 'curly', 'coily'],
        },
        {
          name: 'Hair Length',
          value: 'medium',
          type: 'select',
          options: ['bald', 'buzz', 'short', 'medium', 'long', 'very-long'],
        },
        { name: 'Hair Color', value: '#1F2937', type: 'color' },
      ],
    },
    {
      category: 'Skin',
      attributes: [
        { name: 'Skin Tone', value: '#F3E7D3', type: 'color' },
        {
          name: 'Skin Undertone',
          value: 'neutral',
          type: 'select',
          options: ['warm', 'cool', 'neutral', 'olive'],
        },
      ],
    },
  ];

  const [dna, setDNA] = useState(dnaCategories);

  const updateAttribute = (
    categoryIndex: number,
    attributeIndex: number,
    value: number | string
  ) => {
    const newDNA = [...dna];
    newDNA[categoryIndex].attributes[attributeIndex].value = value;
    setDNA(newDNA);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">DNA Builder</h1>
          <p className="text-gray-500 mt-1">
            Customize character features with precision
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
            Load Template
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
            Save Character
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* DNA Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Character Name */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Character Name
            </label>
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* DNA Categories */}
          {dna.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.attributes.map((attr, attrIndex) => (
                  <div key={attr.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {attr.name}
                    </label>

                    {attr.type === 'slider' && (
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min={attr.min}
                          max={attr.max}
                          value={attr.value as number}
                          onChange={(e) =>
                            updateAttribute(
                              categoryIndex,
                              attrIndex,
                              parseInt(e.target.value)
                            )
                          }
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                        <span className="text-sm font-medium text-gray-900 w-12 text-right">
                          {attr.value}
                        </span>
                      </div>
                    )}

                    {attr.type === 'select' && (
                      <select
                        value={attr.value as string}
                        onChange={(e) =>
                          updateAttribute(categoryIndex, attrIndex, e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {attr.options?.map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </option>
                        ))}
                      </select>
                    )}

                    {attr.type === 'color' && (
                      <div className="flex items-center space-x-3">
                        <input
                          type="color"
                          value={attr.value as string}
                          onChange={(e) =>
                            updateAttribute(categoryIndex, attrIndex, e.target.value)
                          }
                          className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={attr.value as string}
                          onChange={(e) =>
                            updateAttribute(categoryIndex, attrIndex, e.target.value)
                          }
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Preview</h3>

            {/* Avatar Preview */}
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-sm text-gray-500">
                  Avatar preview will appear here
                </p>
              </div>
            </div>

            {/* DNA Summary */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-gray-900">DNA Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Face Shape</span>
                  <span className="font-medium text-gray-900">
                    {dna[0].attributes[0].value}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Eye Shape</span>
                  <span className="font-medium text-gray-900">
                    {dna[1].attributes[0].value}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hair Style</span>
                  <span className="font-medium text-gray-900">
                    {dna[4].attributes[1].value}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200">
                Randomize All
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

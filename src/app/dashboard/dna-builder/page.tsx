'use client';

import { useState } from 'react';
import { CharacterDNA } from '@/types/character-dna';
import { defaultDNA, presetRegistry, PresetName } from '@/lib/dna/defaults';
import { generateCompletePrompt } from '@/lib/dna/prompt-generator';

type DNASection = 'core' | 'facial' | 'eyes' | 'eyebrows' | 'nose' | 'mouth' | 'skin' | 'hair' | 'body' | 'expression' | 'photography';

export default function DNABuilderPage() {
  const [dna, setDNA] = useState<CharacterDNA>(defaultDNA);
  const [activeSection, setActiveSection] = useState<DNASection>('core');
  const [showPrompt, setShowPrompt] = useState(false);

  const sections: { id: DNASection; name: string; icon: string }[] = [
    { id: 'core', name: 'Identity', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'facial', name: 'Face', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'eyes', name: 'Eyes', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { id: 'eyebrows', name: 'Eyebrows', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'nose', name: 'Nose', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { id: 'mouth', name: 'Mouth', icon: 'M14.828 14.828a4 4 0 01-5.656 0' },
    { id: 'skin', name: 'Skin', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { id: 'hair', name: 'Hair', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'body', name: 'Body', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'expression', name: 'Expression', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'photography', name: 'Camera', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  const loadPreset = (presetName: PresetName) => {
    setDNA(JSON.parse(JSON.stringify(presetRegistry[presetName])));
  };

  const updateCore = (field: string, value: any) => {
    setDNA(prev => ({
      ...prev,
      core: { ...prev.core, [field]: value },
      updatedAt: new Date().toISOString(),
    }));
  };

  const updateFacialStructure = (field: string, value: any) => {
    setDNA(prev => ({
      ...prev,
      facialStructure: { ...prev.facialStructure, [field]: value },
      updatedAt: new Date().toISOString(),
    }));
  };

  const updateEyes = (field: string, value: any) => {
    setDNA(prev => ({
      ...prev,
      eyes: { ...prev.eyes, [field]: value },
      updatedAt: new Date().toISOString(),
    }));
  };

  const updateSkin = (field: string, value: any) => {
    setDNA(prev => ({
      ...prev,
      skin: { ...prev.skin, [field]: value },
      updatedAt: new Date().toISOString(),
    }));
  };

  const generatePrompt = () => {
    const scene = {
      type: 'product-demo' as const,
      environment: 'studio' as const,
      activity: 'holding-product' as const,
      cameraAngle: 'front' as const,
      cameraMovement: 'static' as const,
      duration: 15,
      aspectRatio: '9:16' as const,
    };
    return generateCompletePrompt(dna, scene);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">DNA Builder</h1>
            <p className="text-sm text-gray-500 mt-0.5">Create ultra-realistic AI characters with 150+ attributes</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPrompt(!showPrompt)}
              className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {showPrompt ? 'Hide Prompt' : 'View Prompt'}
            </button>
            <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-900">
              Save Character
            </button>
          </div>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-xs font-medium text-gray-600 uppercase">Quick Start:</span>
          {Object.keys(presetRegistry).map((presetName) => (
            <button
              key={presetName}
              onClick={() => loadPreset(presetName as PresetName)}
              className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-black transition-colors"
            >
              {presetName.charAt(0).toUpperCase() + presetName.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex">
        {/* Sidebar Navigation */}
        <div className="w-48 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                </svg>
                {section.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Core Identity Section */}
            {activeSection === 'core' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Identity</h2>
                  <p className="text-sm text-gray-500 mb-6">Basic character information and demographics</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Character Name</label>
                    <input
                      type="text"
                      value={dna.core.name}
                      onChange={(e) => updateCore('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="e.g., Sarah Williams"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        value={dna.core.age}
                        onChange={(e) => updateCore('age', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        min="18"
                        max="80"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                      <select
                        value={dna.core.ageRange}
                        onChange={(e) => updateCore('ageRange', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="teen">Teen (13-17)</option>
                        <option value="young-adult">Young Adult (18-30)</option>
                        <option value="adult">Adult (31-50)</option>
                        <option value="mature">Mature (50+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <div className="flex gap-2">
                      {['female', 'male', 'non-binary'].map((gender) => (
                        <button
                          key={gender}
                          onClick={() => updateCore('gender', gender)}
                          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors ${
                            dna.core.gender === gender
                              ? 'border-black bg-gray-50'
                              : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          {gender.charAt(0).toUpperCase() + gender.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ethnicity</label>
                    <select
                      value={dna.core.ethnicity.primary}
                      onChange={(e) => updateCore('ethnicity', { ...dna.core.ethnicity, primary: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="Caucasian">Caucasian</option>
                      <option value="East Asian">East Asian</option>
                      <option value="South Asian">South Asian</option>
                      <option value="African">African</option>
                      <option value="Hispanic">Hispanic</option>
                      <option value="Middle Eastern">Middle Eastern</option>
                      <option value="Mixed">Mixed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={dna.core.ethnicity.skinToneHex}
                        onChange={(e) => updateCore('ethnicity', { ...dna.core.ethnicity, skinToneHex: e.target.value })}
                        className="w-16 h-10 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        value={dna.core.ethnicity.skinToneHex}
                        onChange={(e) => updateCore('ethnicity', { ...dna.core.ethnicity, skinToneHex: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black font-mono"
                        placeholder="#F5CBA7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Facial Structure Section */}
            {activeSection === 'facial' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Facial Structure</h2>
                  <p className="text-sm text-gray-500 mb-6">Bone structure and face proportions</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Face Shape</label>
                    <select
                      value={dna.facialStructure.headShape}
                      onChange={(e) => updateFacialStructure('headShape', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="oval">Oval</option>
                      <option value="round">Round</option>
                      <option value="square">Square</option>
                      <option value="heart">Heart</option>
                      <option value="diamond">Diamond</option>
                      <option value="oblong">Oblong</option>
                      <option value="triangular">Triangular</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Face Width: {dna.facialStructure.faceWidth}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={dna.facialStructure.faceWidth}
                      onChange={(e) => updateFacialStructure('faceWidth', parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Narrow</span>
                      <span>Wide</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cheekbone Prominence: {dna.facialStructure.cheekboneProminence}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={dna.facialStructure.cheekboneProminence}
                      onChange={(e) => updateFacialStructure('cheekboneProminence', parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Flat</span>
                      <span>Very Prominent</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jawline Shape</label>
                    <select
                      value={dna.facialStructure.jawShape}
                      onChange={(e) => updateFacialStructure('jawShape', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="soft">Soft</option>
                      <option value="defined">Defined</option>
                      <option value="angular">Angular</option>
                      <option value="strong">Strong</option>
                      <option value="square">Square</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chin Shape</label>
                    <select
                      value={dna.facialStructure.chinShape}
                      onChange={(e) => updateFacialStructure('chinShape', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="round">Round</option>
                      <option value="square">Square</option>
                      <option value="pointed">Pointed</option>
                      <option value="cleft">Cleft</option>
                      <option value="protruding">Protruding</option>
                      <option value="receding">Receding</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Eyes Section */}
            {activeSection === 'eyes' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Eyes</h2>
                  <p className="text-sm text-gray-500 mb-6">Eye shape, color, and details (critical for realism)</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Eye Shape</label>
                    <select
                      value={dna.eyes.eyeShape}
                      onChange={(e) => updateEyes('eyeShape', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="almond">Almond</option>
                      <option value="round">Round</option>
                      <option value="hooded">Hooded</option>
                      <option value="monolid">Monolid</option>
                      <option value="upturned">Upturned</option>
                      <option value="downturned">Downturned</option>
                      <option value="deep-set">Deep-set</option>
                      <option value="protruding">Protruding</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Iris Color</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={dna.eyes.irisColor.primary}
                        onChange={(e) => updateEyes('irisColor', { ...dna.eyes.irisColor, primary: e.target.value })}
                        className="w-16 h-10 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        value={dna.eyes.irisColor.primary}
                        onChange={(e) => updateEyes('irisColor', { ...dna.eyes.irisColor, primary: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black font-mono"
                        placeholder="#4A7BA7"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eye Size: {dna.eyes.eyeSize}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={dna.eyes.eyeSize}
                      onChange={(e) => updateEyes('eyeSize', parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Small</span>
                      <span>Large</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upper Lash Length: {dna.eyes.upperLashLength}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={dna.eyes.upperLashLength}
                      onChange={(e) => updateEyes('upperLashLength', parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Short</span>
                      <span>Very Long</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Limbal Ring</div>
                      <div className="text-xs text-gray-500">Dark ring around iris (adds realism)</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dna.eyes.irisColor.limbalRing}
                        onChange={(e) => updateEyes('irisColor', { ...dna.eyes.irisColor, limbalRing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Skin Section */}
            {activeSection === 'skin' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Skin System</h2>
                  <p className="text-sm text-gray-500 mb-6">Ultra-realistic skin texture and details (CRITICAL)</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-amber-900">Critical for Realism</div>
                        <div className="text-xs text-amber-700 mt-1">
                          Visible pores, natural texture, and imperfections are essential for ultra-realistic results. Never disable these features.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Base Skin Tone</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={dna.skin.baseTone.hex}
                        onChange={(e) => updateSkin('baseTone', { ...dna.skin.baseTone, hex: e.target.value })}
                        className="w-16 h-10 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        value={dna.skin.baseTone.hex}
                        onChange={(e) => updateSkin('baseTone', { ...dna.skin.baseTone, hex: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black font-mono"
                        placeholder="#F5CBA7"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Undertone</label>
                    <select
                      value={dna.skin.baseTone.undertone}
                      onChange={(e) => updateSkin('baseTone', { ...dna.skin.baseTone, undertone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="cool">Cool (Pink/Blue)</option>
                      <option value="warm">Warm (Yellow/Golden)</option>
                      <option value="neutral">Neutral (Balanced)</option>
                      <option value="olive">Olive (Green/Gray)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pore Visibility: {dna.skin.texture.poreVisibility} (ALWAYS Visible)
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="10"
                      value={dna.skin.texture.poreVisibility}
                      onChange={(e) => updateSkin('texture', { ...dna.skin.texture, poreVisibility: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Subtle</span>
                      <span>Very Visible</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Freckles</div>
                      <div className="text-xs text-gray-500">Natural freckle pattern</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dna.skin.freckles.has}
                        onChange={(e) => updateSkin('freckles', { ...dna.skin.freckles, has: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>

                  {dna.skin.freckles.has && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Freckle Coverage: {dna.skin.freckles.coverage}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={dna.skin.freckles.coverage}
                        onChange={(e) => updateSkin('freckles', { ...dna.skin.freckles, coverage: parseInt(e.target.value) })}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Few</span>
                        <span>Many</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Other sections can be added here following the same pattern */}
            {activeSection !== 'core' && activeSection !== 'facial' && activeSection !== 'eyes' && activeSection !== 'skin' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sections.find(s => s.id === activeSection)?.name} Controls</h3>
                  <p className="text-sm text-gray-500">Coming soon - full controls for this DNA section</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-96 bg-gray-50 border-l border-gray-200 overflow-y-auto p-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Preview</h3>
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border border-gray-300 flex items-center justify-center mb-4">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm text-gray-600">Character preview</p>
                <p className="text-xs text-gray-500 mt-1">Generate to see result</p>
              </div>
            </div>

            {showPrompt && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase">Generated Prompt</h4>
                  <button className="text-xs text-gray-600 hover:text-black">Copy</button>
                </div>
                <div className="text-xs text-gray-600 font-mono leading-relaxed max-h-96 overflow-y-auto">
                  {generatePrompt()}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-xs font-medium text-gray-500 mb-1">Character</div>
                <div className="text-sm font-semibold text-gray-900">{dna.core.name}</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-xs font-medium text-gray-500 mb-1">Demographics</div>
                <div className="text-sm text-gray-900">
                  {dna.core.age}y • {dna.core.gender} • {dna.core.ethnicity.primary}
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="text-xs font-medium text-gray-500 mb-1">Last Updated</div>
                <div className="text-sm text-gray-900">{new Date(dna.updatedAt).toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

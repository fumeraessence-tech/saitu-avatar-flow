'use client';

import { useState } from 'react';

interface Character {
  id: string;
  name: string;
  thumbnailUrl: string;
  createdAt: string;
  videosCount: number;
}

export default function CharactersPage() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [characterName, setCharacterName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock data - in production, fetch from API
  const [characters] = useState<Character[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      thumbnailUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      createdAt: '2 hours ago',
      videosCount: 5,
    },
    {
      id: '2',
      name: 'Mike Chen',
      thumbnailUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      createdAt: '1 day ago',
      videosCount: 12,
    },
    {
      id: '3',
      name: 'Emma Davis',
      thumbnailUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      createdAt: '3 days ago',
      videosCount: 8,
    },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateCharacter = async () => {
    if (!uploadedImage || !characterName) return;

    setIsGenerating(true);

    try {
      // In production, call the photo-to-avatar API
      const response = await fetch('/api/v1/characters/from-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: uploadedImage,
          name: characterName,
          saveCharacter: true,
        }),
      });

      if (response.ok) {
        // Success - reload characters
        setShowUploadModal(false);
        setUploadedImage(null);
        setCharacterName('');
      }
    } catch (error) {
      console.error('Failed to generate character:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Characters</h1>
          <p className="text-gray-500 mt-1">
            Manage your AI avatars and create new ones
          </p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
        >
          + Create Character
        </button>
      </div>

      {/* Characters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative">
              <img
                src={character.thumbnailUrl}
                alt={character.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
                  <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium">
                    Create Video
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900">{character.name}</h3>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <span>{character.createdAt}</span>
                <span>{character.videosCount} videos</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Create New Character
              </h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
                  {uploadedImage ? (
                    <div className="relative">
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <button
                        onClick={() => setUploadedImage(null)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-gray-600 mb-4">
                        Click to upload or drag and drop
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700"
                      >
                        Choose File
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Character Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Character Name
                </label>
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  placeholder="Enter character name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateCharacter}
                disabled={!uploadedImage || !characterName || isGenerating}
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
                    Generating Character...
                  </span>
                ) : (
                  'Generate Character'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

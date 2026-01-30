'use client';

export default function AssetsPage() {
  return (
    <div className="h-full p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assets</h1>
        <p className="text-sm text-gray-500">Manage your media files and resources</p>
      </div>
      <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center">
        <div className="text-6xl mb-4">📁</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Assets Library</h3>
        <p className="text-sm text-gray-500">Upload and manage your brand assets, logos, and media files</p>
      </div>
    </div>
  );
}

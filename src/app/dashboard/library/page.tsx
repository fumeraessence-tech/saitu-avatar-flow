'use client';

export default function LibraryPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Video Library</h1>
            <p className="text-sm text-gray-500 mt-0.5">View and manage your generated videos</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
              All Videos
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
              Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium text-gray-900">Generated Video {i}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">2 days ago</span>
                    <button className="text-xs text-gray-600 hover:text-black">Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

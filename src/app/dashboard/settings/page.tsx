export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
        <div className="bg-white border border-gray-200 rounded p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              API Key
            </label>
            <input
              type="password"
              placeholder="Enter your API key..."
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Default Model
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-black">
              <option>Kling 2.6</option>
              <option>Sora 2</option>
              <option>Veo 3.1</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-900">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

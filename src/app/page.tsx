export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              AvatarFlow
            </h1>
            <p className="text-xl text-gray-400 font-light">
              AI-Powered UGC Video Creation Platform
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Turn Photos into
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ultra-Realistic AI Avatars
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Create professional UGC videos in minutes. Upload a selfie, add your script,
            and generate videos that look and sound like you.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-lg hover:border-white transition-all">
              View Demo
            </button>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">System Online - Production Ready</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Core Features</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all">
            <div className="text-4xl mb-4">📸</div>
            <h4 className="text-xl font-semibold mb-2">Photo-to-Avatar</h4>
            <p className="text-gray-400">
              Upload a selfie and get an instant AI avatar with 100+ facial attributes extracted.
            </p>
            <div className="mt-4 text-sm text-green-400">✓ &lt; 5 second generation</div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all">
            <div className="text-4xl mb-4">🗣️</div>
            <h4 className="text-xl font-semibold mb-2">Voice Cloning</h4>
            <p className="text-gray-400">
              Clone your voice or choose from presets. Perfect lip-sync with every video.
            </p>
            <div className="mt-4 text-sm text-green-400">✓ ElevenLabs powered</div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all">
            <div className="text-4xl mb-4">🎥</div>
            <h4 className="text-xl font-semibold mb-2">Multi-AI Models</h4>
            <p className="text-gray-400">
              Powered by Gemini 2.0, GPT-4o, and Kling AI with automatic fallbacks.
            </p>
            <div className="mt-4 text-sm text-green-400">✓ 99.8% uptime</div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-semibold mb-2">Product Injection</h4>
            <p className="text-gray-400">
              Drag-and-drop products into your videos. Perfect for e-commerce and ads.
            </p>
            <div className="mt-4 text-sm text-green-400">✓ Natural placement</div>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all">
            <div className="text-4xl mb-4">🔄</div>
            <h4 className="text-xl font-semibold mb-2">95%+ Consistency</h4>
            <p className="text-gray-400">
              Proprietary Character DNA system ensures your avatar looks the same every time.
            </p>
            <div className="mt-4 text-sm text-green-400">✓ Vector embeddings</div>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold mb-2">Production Ready</h4>
            <p className="text-gray-400">
              Docker deployment, health monitoring, Redis caching, and horizontal scaling.
            </p>
            <div className="mt-4 text-sm text-green-400">✓ Enterprise-grade</div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Built With</h3>

        <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
          {[
            'Next.js 15',
            'TypeScript',
            'Prisma',
            'PostgreSQL',
            'Redis',
            'BullMQ',
            'Tailwind CSS',
            'Docker',
            'Clerk Auth',
            'Gemini AI',
            'OpenAI',
            'ElevenLabs',
            'Pinecone',
            'Cloudflare R2',
          ].map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* API Status */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto p-8 bg-gray-800/50 border border-gray-700 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">API Endpoints Available</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <div>
                <code className="text-green-400">GET /api/health</code>
                <p className="text-sm text-gray-400 mt-1">System health check</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                LIVE
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <div>
                <code className="text-green-400">POST /api/v1/characters/from-image</code>
                <p className="text-sm text-gray-400 mt-1">Photo-to-Avatar conversion</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                LIVE
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <div>
                <code className="text-gray-500">POST /api/v1/videos/generate</code>
                <p className="text-sm text-gray-400 mt-1">Video generation (coming soon)</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                SOON
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p className="mb-4">
            AvatarFlow - AI-Powered UGC Video Creation Platform
          </p>
          <p className="text-sm">
            Built with Next.js 15, TypeScript, and cutting-edge AI models
          </p>
          <div className="mt-6 flex gap-6 justify-center text-sm">
            <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
            <a href="/api/health" className="hover:text-white transition-colors">API Status</a>
            <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

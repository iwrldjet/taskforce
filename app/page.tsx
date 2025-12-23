export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-6 py-4 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-2xl font-bold">iwrld</span>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            Launch Builder
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold text-center mb-6">
          Build Apps <span className="text-blue-600">Visually</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Create web applications with drag-and-drop and AI. No coding needed.
        </p>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">
            Start Building Free
          </button>
        </div>

        <div className="mt-20 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
          <div className="text-5xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold mb-2">Visual Builder</h3>
          <p className="text-gray-500">(Drag and drop interface coming soon)</p>
        </div>
      </main>
    </div>
  )
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slogan */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 z-0" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Other AI Libraries Suck.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're here to fix it. Welcome to Pandora's Box - where AI actually works.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your AI Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button className="p-8 rounded-xl bg-gradient-to-br from-purple-900 to-pink-900 hover:from-purple-800 hover:to-pink-800 transition-all transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Generative AI</h3>
              <p className="text-gray-300">Create, imagine, and generate new content with our cutting-edge models</p>
            </button>
            <button className="p-8 rounded-xl bg-gradient-to-br from-blue-900 to-cyan-900 hover:from-blue-800 hover:to-cyan-800 transition-all transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Analytical AI</h3>
              <p className="text-gray-300">Analyze, predict, and understand data with our powerful analytical models</p>
            </button>
          </div>
        </div>
      </section>

      {/* Models Display Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured AI Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for AI models */}
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <div className="h-48 bg-gray-700/50 rounded-lg mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Model Name</h3>
              <p className="text-gray-400">Model description and capabilities</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <div className="h-48 bg-gray-700/50 rounded-lg mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Model Name</h3>
              <p className="text-gray-400">Model description and capabilities</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <div className="h-48 bg-gray-700/50 rounded-lg mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Model Name</h3>
              <p className="text-gray-400">Model description and capabilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          How It Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Choose Your Path</h3>
            <p className="text-gray-300">
              Select between Generative or Analytical AI based on your needs. Each path offers specialized models for different tasks.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Select Your Model</h3>
            <p className="text-gray-300">
              Browse through our curated collection of state-of-the-art AI models, each optimized for specific tasks and use cases.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Integrate & Deploy</h3>
            <p className="text-gray-300">
              Follow our clear documentation to integrate the chosen model into your project using our simple API or interface.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Pandora's Box?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Simplified integration process with clear documentation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Optimized performance for production environments</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Regular updates and new model additions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Dedicated support and active community</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Getting Started</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm mb-4">
              {`npm install pandoras-box-ai`}
            </div>
            <p className="text-center text-gray-300">
              Check out our comprehensive documentation to start building with AI that actually works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how Pandora's Box revolutionizes AI integration with our intuitive platform
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-50" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
            <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto mb-8">
              Pandora's Box provides a unified platform for accessing and integrating state-of-the-art AI models. 
              Our platform simplifies the process of finding, testing, and deploying AI solutions for your specific needs.
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-purple-900/30 px-4 py-2 rounded-full text-sm text-purple-300">Easy Integration</div>
              <div className="bg-pink-900/30 px-4 py-2 rounded-full text-sm text-pink-300">Enterprise Ready</div>
              <div className="bg-purple-900/30 px-4 py-2 rounded-full text-sm text-purple-300">24/7 Support</div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Explore & Discover</h3>
            <p className="text-gray-300">
              Browse our comprehensive catalog of AI models, categorized by function and use case. 
              Use our advanced search to find the perfect model for your needs.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Test & Evaluate</h3>
            <p className="text-gray-300">
              Try models directly in our interactive playground. 
              Test with your own data and evaluate performance before integration.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Integrate & Scale</h3>
            <p className="text-gray-300">
              Seamlessly integrate models into your applications using our robust API. 
              Scale your AI solutions with our enterprise-grade infrastructure.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Comprehensive Model Library</h4>
                    <p className="text-gray-300">Access to the latest AI models across multiple domains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Enterprise-Ready Infrastructure</h4>
                    <p className="text-gray-300">High-performance, scalable, and secure deployment options</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Advanced Analytics</h4>
                    <p className="text-gray-300">Monitor performance and optimize model usage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Dedicated Support</h4>
                    <p className="text-gray-300">24/7 technical support and expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gray-800/50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-lg group hover:bg-gray-900/70 transition-colors">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">1. Install the SDK</h3>
                  <div className="bg-black/50 p-4 rounded-lg font-mono text-sm mb-4">
                    {`npm install pandoras-box-ai`}
                  </div>
                </div>
                
                <div className="bg-gray-900/50 p-6 rounded-lg group hover:bg-gray-900/70 transition-colors">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">2. Initialize the Client</h3>
                  <div className="bg-black/50 p-4 rounded-lg font-mono text-sm mb-4">
                    {`import { PandorasBox } from 'pandoras-box-ai';\n\nconst client = new PandorasBox({\n  apiKey: 'your-api-key',\n  environment: 'production'\n});`}
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg group hover:bg-gray-900/70 transition-colors">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">3. Start Building</h3>
                  <p className="text-gray-300 mb-4">
                    Explore our comprehensive documentation to learn how to integrate and use our AI models.
                  </p>
                  <Link 
                    href="/learn" 
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
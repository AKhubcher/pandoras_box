import React from "react";
import Link from "next/link";

const resources = [
  {
    title: "Quick Start Guides",
    items: [
      {
        name: "Getting Started with Pandora's Box",
        description: "Learn the basics of setting up and using our AI library",
        path: ""
      },
      {
        name: "API Integration Guide",
        description: "Step-by-step guide to integrating our API into your projects",
        path: ""
      },
      {
        name: "Model Selection Guide",
        description: "How to choose the right AI model for your use case",
        path: ""
      }
    ]
  },
  {
    title: "Tutorials",
    items: [
      {
        name: "Text Generation with GPT-4",
        description: "Create powerful text generation applications",
        path: ""
      },
      {
        name: "Image Creation with DALL-E",
        description: "Generate and edit images using AI",
        path: ""
      },
      {
        name: "Speech Recognition with Whisper",
        description: "Implement accurate speech-to-text functionality",
        path: ""
      }
    ]
  }
];

export default function LearnPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Learn
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Master AI development with our comprehensive guides, tutorials, and resources.
        </p>

        {/* Featured Resource */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">New to AI Development?</h2>
              <p className="text-gray-300 mb-6">
                Start with our comprehensive beginner's guide to AI development using Pandora's Box.
                Learn the fundamentals and best practices.
              </p>
              <Link
                href=""
                className="inline-block px-6 py-3 bg-purple-600/50 rounded-lg hover:bg-purple-600/70 transition-colors"
              >
                Start Learning →
              </Link>
            </div>
            <div className="w-32 h-32 bg-purple-600/30 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-purple-600/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Resource Sections */}
        <div className="space-y-16">
          {resources.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold mb-8">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block"
                  >
                    <div className="bg-gray-800/50 rounded-xl p-6 h-full hover:bg-gray-800/70 transition-colors">
                      <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-16 bg-gray-800/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-6">
            Connect with other developers, share your projects, and get help from our community.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href=""
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors"
            >
              Join Discord
            </Link>
            <Link
              href=""
              className="px-6 py-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
            >
              Visit Forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
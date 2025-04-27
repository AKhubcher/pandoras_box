import React from "react";
import Link from "next/link";

const allModels = [
  {
    name: "BART",
    description: "Bidirectional and Auto-Regressive Transformer for sequence-to-sequence tasks",
    category: "Natural Language Processing",
    path: "/analysis/nlp/bart",
    bgColor: "from-blue-900/50 to-indigo-900/50"
  },
  {
    name: "BERT",
    description: "Bidirectional language understanding and analysis for advanced text comprehension",
    category: "Natural Language Processing",
    path: "/analysis/nlp/bert",
    bgColor: "from-blue-900/50 to-indigo-900/50"
  },
  {
    name: "DALL-E",
    description: "Create and edit stunning images from natural language descriptions",
    category: "Image Generation",
    path: "/generation/image/dalle",
    bgColor: "from-purple-900/50 to-pink-900/50"
  },
  {
    name: "DeepAI",
    description: "Multi-purpose AI model for various creative and analytical tasks",
    category: "Multi-Modal",
    path: "/generation/deepai",
    bgColor: "from-purple-900/50 to-pink-900/50"
  },
  {
    name: "DeepSpeech",
    description: "Advanced speech recognition model for accurate audio transcription",
    category: "Speech Recognition",
    path: "/analysis/audio/deepspeech",
    bgColor: "from-blue-900/50 to-indigo-900/50"
  },
  {
    name: "GPT-4",
    description: "State-of-the-art language model for text generation and understanding",
    category: "Text Generation",
    path: "/generation/text/gpt4",
    bgColor: "from-purple-900/50 to-pink-900/50"
  },
  {
    name: "Llama",
    description: "Open-source large language model for versatile text generation",
    category: "Text Generation",
    path: "/generation/text/llama",
    bgColor: "from-purple-900/50 to-pink-900/50"
  },
  {
    name: "Whisper",
    description: "Robust speech recognition model for multiple languages and tasks",
    category: "Speech Recognition",
    path: "/analysis/audio/whisper",
    bgColor: "from-blue-900/50 to-indigo-900/50"
  }
].sort((a, b) => a.name.localeCompare(b.name));

export default function ModelsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          All Models
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allModels.map((model) => (
            <Link
              key={model.name}
              href={model.path}
              className="block"
            >
              <div className={`bg-gradient-to-r ${model.bgColor} rounded-xl p-6 h-full hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700/50" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{model.name}</h3>
                    <p className="text-sm text-gray-300">{model.category}</p>
                  </div>
                </div>
                <p className="text-gray-300">{model.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for More?</h2>
          <p className="text-gray-300 mb-6">
            We're constantly adding new models to our library. Check back often for updates!
          </p>
          <Link 
            href="/learn"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors"
          >
            Learn More About Our Models
          </Link>
        </div>
      </div>
    </div>
  );
} 
import React from "react";
import Link from "next/link";

const allModels = {
  generative: {
    title: "Generative Models",
    models: [
      {
        name: "GPT-4",
        description: "Advanced language model for text generation and understanding",
        category: "Text Generation",
        path: "/generation/text/gpt4",
        bgColor: "from-purple-900/50 to-pink-900/50"
      },
      {
        name: "DALL-E 3",
        description: "Create stunning images from textual descriptions",
        category: "Image Generation",
        path: "/generation/image/dalle3",
        bgColor: "from-purple-900/50 to-pink-900/50"
      },
      {
        name: "Stable Diffusion",
        description: "Open-source image generation and manipulation",
        category: "Image Generation",
        path: "/generation/image/stable-diffusion",
        bgColor: "from-purple-900/50 to-pink-900/50"
      }
    ]
  },
  analytical: {
    title: "Analytical Models",
    models: [
      {
        name: "BERT",
        description: "Bidirectional language understanding and analysis",
        category: "Natural Language Processing",
        path: "/analysis/nlp/bert",
        bgColor: "from-blue-900/50 to-indigo-900/50"
      },
      {
        name: "ResNet",
        description: "Deep learning model for image recognition and classification",
        category: "Computer Vision",
        path: "/analysis/vision/resnet",
        bgColor: "from-blue-900/50 to-indigo-900/50"
      },
      {
        name: "Whisper",
        description: "Advanced speech recognition and transcription",
        category: "Audio Processing",
        path: "/analysis/audio/whisper",
        bgColor: "from-blue-900/50 to-indigo-900/50"
      }
    ]
  }
};

export default function ModelsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          All Models
        </h1>

        {Object.entries(allModels).map(([key, section]) => (
          <div key={key} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.models.map((model) => (
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
          </div>
        ))}

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
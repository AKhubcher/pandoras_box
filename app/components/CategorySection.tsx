"use client";

import Link from 'next/link';

interface SubCategory {
  name: string;
  description: string;
  path: string;
}

interface Category {
  name: string;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    name: "Analysis",
    subCategories: [
      {
        name: "Natural Language Processing",
        description: "AI models specialized in understanding, interpreting, and generating human language",
        path: "/models/nlp"
      },
      {
        name: "Speech and Audio Processing",
        description: "Models for speech recognition, audio analysis, and sound processing",
        path: "/models/speech"
      },
      {
        name: "Predictive",
        description: "AI systems for forecasting, trend analysis, and predictive modeling",
        path: "/models/predictive"
      },
      {
        name: "Computer Vision",
        description: "Models for image recognition, object detection, and visual analysis",
        path: "/models/vision"
      }
    ]
  },
  {
    name: "Generation",
    subCategories: [
      {
        name: "Image",
        description: "AI models for creating, editing, and enhancing images",
        path: "/models/image"
      },
      {
        name: "Audio",
        description: "Models for generating music, sound effects, and audio content",
        path: "/models/audio"
      },
      {
        name: "Video",
        description: "AI systems for video generation, editing, and enhancement",
        path: "/models/video"
      },
      {
        name: "Text",
        description: "Models for generating written content, stories, and articles",
        path: "/models/text"
      },
      {
        name: "Code",
        description: "AI assistants for code generation, completion, and optimization",
        path: "/models/code"
      }
    ]
  }
];

export default function CategorySection() {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.name} className="space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subCategories.map((subCategory) => (
              <div 
                key={subCategory.name}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  {subCategory.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {subCategory.description}
                </p>
                <Link 
                  href={subCategory.path}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  View Models
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 
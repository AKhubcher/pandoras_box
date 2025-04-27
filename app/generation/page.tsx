import Link from "next/link";

const generationCategories = [
  {
    name: "Image Generation",
    description: "Create stunning images from text descriptions",
    path: "/generation/image"
  },
  {
    name: "Text Generation",
    description: "Generate human-like text for various purposes",
    path: "/generation/text"
  },
  {
    name: "Audio Generation",
    description: "Create music, sound effects, and voice synthesis",
    path: "/generation/audio"
  },
  {
    name: "Video Generation",
    description: "Generate and edit video content",
    path: "/generation/video"
  },
  {
    name: "Code Generation",
    description: "Generate and complete code in various programming languages",
    path: "/generation/code"
  }
];

export default function GenerationPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Generative AI</h1>
        <p className="text-xl text-gray-400 mb-8">
          Explore our collection of AI models that can create new content across different media types.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generationCategories.map((category) => (
            <div key={category.name} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <Link
                href={category.path}
                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors"
              >
                Explore Models
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
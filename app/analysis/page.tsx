import Link from "next/link";

const analysisCategories = [
  {
    name: "Natural Language Processing",
    description: "Analyze and understand human language",
    path: "/analysis/nlp"
  },
  {
    name: "Computer Vision",
    description: "Analyze and interpret visual information",
    path: "/analysis/vision"
  },
  {
    name: "Audio Processing",
    description: "Analyze and process audio signals",
    path: "/analysis/audio"
  },
  {
    name: "Predictive Analytics",
    description: "Forecast trends and patterns in data",
    path: "/analysis/predictive"
  },
  {
    name: "Data Analysis",
    description: "Process and analyze structured and unstructured data",
    path: "/analysis/data"
  }
];

export default function AnalysisPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Analytical AI</h1>
        <p className="text-xl text-gray-400 mb-8">
          Explore our collection of AI models that analyze and interpret various types of data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analysisCategories.map((category) => (
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
import Link from "next/link";

const textModels = [
    {
        name: "Llama",
        cost: "free",
        description: "A series of open foundational language models developed by Meta (Facebook), optimized for high performance with relatively smaller training datasets.",
        capabilities: ["Focused on efficiency with smaller datasets", "Lightweight compared to other larger models", "Intended for Academic and Research Communities", "Open-Weight Models", "Available for various sizes", "Multilingual capabilities"],
        path: "/generation/text/llama"
    },
    {
        name: "Bart",
        cost: "free",
        description: "A Facebook AI model that combines the strengths of BERT (understanding) and GPT (generation) for tasks like text summarization and translation.",
        capabilities: ["Combines bidirectional (BERT) and autoregressive (GPT) approaches", "Strong in text generation, summarization, translation", "Pre-trained on corrupted text reconstruction tasks", "Performs well in low-resource settings", "Good for both understanding and generation tasks"],
        path: "/generation/text/bart"
    }
];

export default function NLPPage() {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mb-4">Text Generation</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Explore our collection of NLP models that help machines understand, interpret, and generate human language.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {textModels.map((model) => (
                        <div key={model.name} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                            <h3 className="inline-block text-2xl font-bold mb-4">{model.name}</h3>
                            <p className="inline-block m-4 text-purple-400">{model.cost}</p>
                            <p className="text-gray-400 mb-4">{model.description}</p>
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold mb-2">Capabilities:</h4>
                                <ul className="list-disc list-inside text-gray-400">
                                    {model.capabilities.map((capability) => (
                                        <li key={capability}>{capability}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href={model.path}
                                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors"
                            >
                                Try Model
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 
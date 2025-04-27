import Link from "next/link";

const imageModels = [
    {
        name: "Deep AI",
        description: "Generates all kinds of content, from text, images, and videos, to music- all in one place.",
        capabilities: ["Text generation", "Easy-to-use", "Video Generation", "All in One"],
        path: "/geni"
    },
    {
        name: "DALLE-E",
        description: "Text-to-image models developed by OpenAI using deep learning methodologies",
        capabilities: ["Text-to-Image Models", "Digital Image Generations", "Audio and Speech Development", "Text Generation"],
        path: "https://platform.openai.com/docs/quickstart?api-mode=responses"
    },
    {
        name: "",
        description: "Text-to-Text Transfer Transformer for various NLP tasks",
        capabilities: ["Text summarization", "Translation", "Question answering", "Text classification"],
        path: "/models/t5"
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

                <h1 className="text-4xl font-bold mb-4">Natural Language Processing</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Explore our collection of NLP models that help machines understand, interpret, and generate human language.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {imageModels.map((model) => (
                        <div key={model.name} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                            <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
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
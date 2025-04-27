import Link from "next/link";

const audioModels = [
    {
        name: "Whisper",
        cost: "paid",
        description: "Whisper is a state-of-the-art model for automatic speech recognition (ASR) and speech translation, proposed in the paper Robust Speech Recognition via Large-Scale Weak Supervision by Alec Radford et al. from OpenAI. Trained on >5M hours of labeled data, Whisper demonstrates a strong ability to generalise to many datasets and domains in a zero-shot setting",
        capabilities: ["Translation", "Transcription", "Timestamping", "Open-Source", "Robust to Noise"],
        path: "/analysis/audio/whisper"
    },
    {
        name: "Deep Speech",
        cost: "free",
        description: "DeepSpeech is an open source Speech-To-Text engine, using a model trained by machine learning techniques based on Baidu’s Deep Speech research paper. Project DeepSpeech uses Google’s TensorFlow to make the implementation easier.",
        capabilities: ["Speech-To-Text", "Works Offline", "Open-Source", "Customizable and Trainable", "Simple API", "TensorFlow-Based"],
        path: "/analysis/audio/deepspeech"
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

                <h1 className="text-4xl font-bold mb-4">Audio Processing</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Explore our collection of Audio Processing AIs that enable machines to listen, transcribe, interpret, and enhance human speech and sounds.sdfsdf
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {audioModels.map((model) => (
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
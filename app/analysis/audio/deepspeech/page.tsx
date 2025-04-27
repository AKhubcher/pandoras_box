import Image from "next/image";
import Link from "next/link";

export default function GPT4Page() {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/analysis/nlp" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Analysis
                    </Link>
                </div>

                {/* Model Header */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="w-24 h-24 bg-purple-900/50 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-purple-600/50 rounded-full" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-2">Deep Speech</h1>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> Deep Speech
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://deepspeech.readthedocs.io/en/r0.9/" style={{ textDecoration: "underline", color: '#3D90D7' }}>Deep Speech</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Speech-to-text, Open-source, Mozilla-developed
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://deepspeech.readthedocs.io/en/r0.9/" style={{ textDecoration: "underline", color: '#3D90D7' }}>Docs</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div id="introduction" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    DeepSpeech is an open-source speech recognition system developed by Mozilla that uses deep learning techniques to convert spoken language into text. Built on research published by Baidu's Silicon Valley AI Lab, it implements an end-to-end neural network architecture that takes audio as input and directly outputs text transcriptions without relying on traditional speech recognition components like pronunciation dictionaries or language models as separate modules.
                                </p>
                                <p>
                                    What makes DeepSpeech particularly significant is its accessibility and flexibility as an open-source platform. The system was designed to run efficiently on various devices, from powerful servers to consumer hardware, making speech recognition technology more widely available to developers and users. DeepSpeech supports multiple languages and has been continuously improved through community contributions, focusing on accuracy, speed, and reduced model size to enable practical applications ranging from voice assistants and transcription services to accessibility tools for people with hearing impairments.RetryClaude can make mistakes. Please double-check responses.
                                </p>
                            </div>
                        </div>

                        <div id="instructions" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <div className="space-y-3">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    1. Choose your interaction method (API or interface)
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateText(prompt: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}`}
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    2. Provide clear, well-structured prompts
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    3. Set appropriate temperature and parameters
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    4. Review and refine the generated output
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    5. Iterate based on results
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    6. Implement safety measures and content filtering
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Natural Language Understanding</h3>
                                    <p className="text-gray-300">Advanced comprehension of context, nuance, and complex language patterns</p>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Code Generation</h3>
                                    <p className="text-gray-300">Ability to write, review, and explain code across multiple programming languages</p>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Creative Writing</h3>
                                    <p className="text-gray-300">Generation of various creative content formats with consistent style and tone</p>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Analysis & Reasoning</h3>
                                    <p className="text-gray-300">Complex problem-solving and detailed analytical capabilities</p>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Example: Creative writing prompt
const response = await generateText(
  "Write a short story about a robot learning to paint"
);`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Example: Code generation
const response = await generateText(
  "Write a React component for a todo list"
);`}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 static top-4">
                            <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                            <nav className="space-y-2">
                                <a href="#introduction" className="block text-gray-300 hover:text-white hover:bg-purple-900/30 px-3 py-2 rounded-lg transition-colors">Introduction</a>
                                <a href="#instructions" className="block text-gray-300 hover:text-white hover:bg-purple-900/30 px-3 py-2 rounded-lg transition-colors">Instructions</a>
                                <a href="#capabilities" className="block text-gray-300 hover:text-white hover:bg-purple-900/30 px-3 py-2 rounded-lg transition-colors">Capabilities</a>
                                <a href="#examples" className="block text-gray-300 hover:text-white hover:bg-purple-900/30 px-3 py-2 rounded-lg transition-colors">Examples</a>
                            </nav>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Key Features</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Advanced language understanding</li>
                                <li>• Multi-modal capabilities</li>
                                <li>• Improved reasoning</li>
                                <li>• Enhanced creativity</li>
                                <li>• Better context retention</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
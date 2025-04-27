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
                        <h1 className="inline-block text-4xl font-bold mb-2">GPT-4</h1>
                        <p className="inline-block m-4 text-red-400">paid</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> GPT-4
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://platform.openai.com/docs/models/gpt-4" style={{ textDecoration: "underline", color: '#3D90D7' }}>OpenAI</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Large language model, Text generation, Reasoning
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://platform.openai.com/docs/quickstart?api-mode=responses" style={{ textDecoration: "underline", color: '#3D90D7' }}>OA API</a>
                            </div>
                            <div className="text-green-400 bg-purple-900/30 px-4 py-2 rounded-lg">
                                borrow
                            </div>
                        </div>
                    </div >
                </div >

                {/* Content Grid */}
                < div className="grid grid-cols-1 lg:grid-cols-3 gap-8" >
                    {/* Main Content */}
                    < div className="lg:col-span-2 space-y-8" >
                        <div id="introduction" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    GPT-4 is OpenAI's most advanced large language model, demonstrating human-level performance on various professional and academic benchmarks. As a multimodal model, GPT-4 can accept both image and text inputs and produce text outputs, allowing for sophisticated understanding and generation across multiple content types.
                                </p>
                                <p>
                                    Compared to its predecessors, GPT-4 exhibits enhanced capabilities in reasoning, world knowledge, creative content generation, and instruction following. It excels at understanding context and nuance in complex tasks, making it suitable for applications ranging from content creation and summarization to code generation and problem-solving across domains.
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
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Example: Multimodal image understanding
const response = await openai.chat.completions.create({
  model: "gpt-4-vision-preview",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What's in this image?" },
        { type: "image_url", image_url: { url: "https://example.com/image.jpg" } }
      ]
    }
  ]
});`}
                                </div>
                            </div>
                        </div>
                    </div >

                    {/* Sidebar */}
                    < div className="space-y-6" >
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
                                <li>• Multi-modal capabilities (text + images)</li>
                                <li>• Improved reasoning</li>
                                <li>• Enhanced creativity</li>
                                <li>• Better context retention</li>
                                <li>• Extensive knowledge base</li>
                            </ul>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
} 
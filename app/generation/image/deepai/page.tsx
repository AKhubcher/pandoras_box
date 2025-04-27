import Image from "next/image";
import Link from "next/link";

export default function GPT4Page() {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/generation/image" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Generation
                    </Link>
                </div>

                {/* Model Header */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="w-24 h-24 bg-purple-900/50 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-purple-600/50 rounded-full" />
                    </div>
                    <div className="flex-1">
                        <h1 className="inline-block text-4xl font-bold mb-2">DEEP AI</h1>
                        <p className="inline-block m-4 text-orange-400">freemium</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> DEEP AI
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://deepai.org/docs" style={{ textDecoration: "underline", color: '#3D90D7' }}>DEEP-AI</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> API-platform, Multifunctional, Developer-tools
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://deepai.org/docs#apis" style={{ textDecoration: "underline", color: '#3D90D7' }}>Docs</a>
                            </div>
                            <div className="text-red-400 bg-purple-900/30 px-4 py-2 rounded-lg">
                                no keys
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
                                    DeepAI provides accessible AI tools via APIs and web interfaces, offering:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Text/image generation APIs</li>
                                    <li>No-code web interface for quick testing</li>
                                    <li>Open-access research and educational resources</li>
                                    <li>Developer-friendly REST API structure</li>
                                </ul>
                            </div>
                        </div>

                        <div id="instructions" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <div className="space-y-3">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">1. Choose Interaction Method</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>API:</strong> POST to <code>https://api.deepai.org/text-generator</code></li>
                                        <li><strong>Headers:</strong> <code>'api-key': YOUR_KEY</code></li>
                                        <li><strong>Body:</strong> JSON with <code>text</code> and parameters</li>
                                        <li><strong>Web Interface:</strong> Sliders for temperature/length</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Prompt Guidelines</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Specify format/length (e.g., "200-word blog post")</li>
                                        <li>Include target audience (e.g., "for beginners")</li>
                                        <li>Add constraints: "Avoid technical jargon"</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Key Parameters</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>Temperature:</strong> 0.0 (strict) to 1.0 (creative)</li>
                                        <li><strong>max_length:</strong> Control response size</li>
                                        <li><strong>top_p:</strong> Filter unlikely words</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4. Refinement & Safety</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Review for accuracy/bias</li>
                                        <li>Iterate with adjusted prompts</li>
                                        <li>Use DeepAI's content filters + custom checks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Text Generation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Blog posts/summaries</li>
                                        <li>• Creative writing</li>
                                        <li>• Technical documentation</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Image Processing</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Style transfer</li>
                                        <li>• Colorization</li>
                                        <li>• Object detection</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Developer Tools</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Code explanation</li>
                                        <li>• API integration</li>
                                        <li>• Rapid prototyping</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Content Moderation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• NSFW filtering</li>
                                        <li>• Toxicity detection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Text Generation API Call
fetch('https://api.deepai.org/text-generator', {
  method: 'POST',
  headers: { 'api-key': 'YOUR_KEY' },
  body: JSON.stringify({
    text: "Explain quantum computing in 3 sentences",
    temperature: 0.3
  })
});`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Image Colorization Example
fetch('https://api.deepai.org/colorizer', {
  method: 'POST',
  headers: { 'api-key': 'YOUR_KEY' },
  body: JSON.stringify({ image: "URL_TO_BW_IMAGE" })
});`}
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
                                <li>• <strong>20+ AI APIs</strong>: Text, image, video, etc.</li>
                                <li>• <strong>Free Tier</strong>: Limited daily requests</li>
                                <li>• <strong>Fast Integration</strong>: Simple REST endpoints</li>
                                <li>• <strong>Real-Time Processing</strong>: Low latency responses</li>
                                <li>• <strong>Prebuilt Models</strong>: No training required</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
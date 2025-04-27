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
                        <h1 className="inline-block text-4xl font-bold mb-2">DALL-E</h1>
                        <p className="inline-block m-4 text-red-400">paid</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> DALL-E 3
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://platform.openai.com/docs/guides/images" style={{ textDecoration: "underline", color: '#3D90D7' }}>OpenAI</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Image-generation, Text-to-image, AI-art
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://platform.openai.com/docs/quickstart" style={{ textDecoration: "underline", color: '#3D90D7' }}>OpenAI API</a>
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
                                    DALL-E is OpenAI's breakthrough text-to-image generation system that:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Creates high-quality images from text descriptions</li>
                                    <li>Understands complex prompts with multiple objects and attributes</li>
                                    <li>Generates images in various styles (photorealistic, art, etc.)</li>
                                    <li>Supports image editing and variations of existing images</li>
                                </ul>
                                <p>
                                    DALL-E 3 offers significant improvements in prompt understanding, image quality, and text rendering within images compared to previous versions.
                                </p>
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
                                        <li><strong>API:</strong> Use OpenAI's Images API endpoint</li>
                                        <li><strong>Web Interface:</strong> ChatGPT Plus with DALL-E integration</li>
                                        <li><strong>Python SDK:</strong> Official OpenAI package</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`import OpenAI from 'openai';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "A cat astronaut in space",
  size: "1024x1024",
  quality: "standard",
  n: 1,
});`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Craft Effective Prompts</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Be specific: "A watercolor painting of a sunset over mountains"</li>
                                        <li>Include style: "Digital art", "Oil painting", "Pixel art"</li>
                                        <li>Specify composition: "Centered", "Background focus"</li>
                                        <li>Use DALL-E 3's enhanced prompt understanding</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Key Parameters</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>size:</strong> 1024x1024, 1024x1792, or 1792x1024</li>
                                        <li><strong>quality:</strong> "standard" (faster) or "hd" (higher detail)</li>
                                        <li><strong>style:</strong> "vivid" (more dramatic) or "natural"</li>
                                        <li><strong>n:</strong> Number of images (1 for DALL-E 3)</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4. Refinement & Safety</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Review images for accuracy and quality</li>
                                        <li>Iterate with adjusted prompts for better results</li>
                                        <li>Built-in content filters prevent harmful outputs</li>
                                        <li>Respect copyright and usage guidelines</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Image Generation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Photorealistic scenes</li>
                                        <li>• Artistic styles (painting, sketch, etc.)</li>
                                        <li>• Conceptual illustrations</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Image Editing</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Outpainting (extend images)</li>
                                        <li>• Variations of existing images</li>
                                        <li>• Selective editing with masks</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Special Features</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Text rendering within images</li>
                                        <li>• Multi-object compositions</li>
                                        <li>• Perspective control</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Creative Applications</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Concept art generation</li>
                                        <li>• Marketing visuals</li>
                                        <li>• Educational materials</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Basic Image Generation
const response = await openai.images.generate({
  prompt: "A cyberpunk cityscape at night with neon lights, rain-soaked streets, and flying cars, digital art style",
  model: "dall-e-3",
  size: "1024x1024"
});`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Style-Specific Prompt
const response = await openai.images.generate({
  prompt: "A portrait of a wizard in van gogh style with visible brush strokes",
  model: "dall-e-3",
  style: "vivid",
  quality: "hd"
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
                                <li>• <strong>High-Resolution</strong>: Up to 1792x1024px</li>
                                <li>• <strong>Prompt Rewriting</strong>: Auto-optimizes your prompts</li>
                                <li>• <strong>Text Rendering</strong>: Improved text in images</li>
                                <li>• <strong>Safety Systems</strong>: Built-in content filters</li>
                                <li>• <strong>Multiple Aspect Ratios</strong>: Square, portrait, landscape</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
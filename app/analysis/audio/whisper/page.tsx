import Image from "next/image";
import Link from "next/link";

export default function WhisperPage() {
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
                        <h1 className="inline-block text-4xl font-bold mb-2">Whisper</h1>
                        <p className="inline-block m-4 text-red-400">paid</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> Whisper
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://platform.openai.com/docs/api-reference/audio" style={{ textDecoration: "underline", color: '#3D90D7' }}>OpenAI</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Speech-recognition, Multilingual, Transcription
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://platform.openai.com/docs/quickstart" style={{ textDecoration: "underline", color: '#3D90D7' }}>OA API</a>
                            </div>
                            <div className="text-green-400 bg-purple-900/30 px-4 py-2 rounded-lg">
                                borrow
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
                                    Whisper is OpenAI's advanced automatic speech recognition (ASR) system that:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Transcribes spoken language with high accuracy across multiple languages</li>
                                    <li>Trained on 680,000 hours of multilingual and multitask supervised data</li>
                                    <li>Performs robustly across various audio conditions and background noise</li>
                                    <li>Handles technical language and heavily accented speech effectively</li>
                                </ul>
                                <p>
                                    Whisper's versatility comes from its Transformer-based encoder-decoder architecture that converts diverse audio inputs into accurate text outputs, making it valuable for applications from content transcription and accessibility tools to language learning platforms.
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
                                        <li><strong>API:</strong> Use OpenAI's Audio API endpoint</li>
                                        <li><strong>Python SDK:</strong> Official OpenAI package</li>
                                        <li><strong>Open Source:</strong> Direct model implementation available</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function transcribeAudio(filePath) {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(filePath),
    model: "whisper-1",
    language: "en"
  });

  return transcription.text;
}`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Configure Audio Parameters</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Prepare audio in supported formats (MP3, MP4, WAV, etc.)</li>
                                        <li>Consider file size limits (25MB for API)</li>
                                        <li>Specify language for better accuracy (optional)</li>
                                        <li>Choose transcription or translation mode</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Key Parameters</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>model:</strong> "whisper-1" (current API model)</li>
                                        <li><strong>language:</strong> Language code (e.g., "en", "es", "ja")</li>
                                        <li><strong>response_format:</strong> "json", "text", "srt", "verbose_json", "vtt"</li>
                                        <li><strong>temperature:</strong> Controls randomness (0.0 to 1.0)</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4. Post-Processing & Best Practices</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Review transcriptions for accuracy</li>
                                        <li>Use prompt engineering for domain-specific terminology</li>
                                        <li>Implement feedback loops for continuous improvement</li>
                                        <li>Consider using timestamps for longer audio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Speech Recognition</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• High-accuracy transcription</li>
                                        <li>• Multilingual support (100+ languages)</li>
                                        <li>• Robust to background noise</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Translation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Direct audio-to-English translation</li>
                                        <li>• Preserves meaning across languages</li>
                                        <li>• Handles colloquialisms</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Special Features</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Language identification</li>
                                        <li>• Timestamp generation</li>
                                        <li>• Formatted subtitle creation</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Applications</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Content accessibility</li>
                                        <li>• Meeting transcription</li>
                                        <li>• Multimedia processing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Basic Transcription
const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream("audio.mp3"),
  model: "whisper-1",
});

console.log(transcription.text);`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Translation with Specific Parameters
const translation = await openai.audio.translations.create({
  file: fs.createReadStream("spanish-audio.mp3"),
  model: "whisper-1",
  response_format: "srt",
  temperature: 0.2
});

console.log(translation);`}
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
                                <li>• <strong>Multilingual</strong>: 100+ languages supported</li>
                                <li>• <strong>Open-Source</strong>: Available for direct use</li>
                                <li>• <strong>Versatile Output</strong>: Multiple formats (JSON, SRT, VTT)</li>
                                <li>• <strong>Robust</strong>: Handles challenging audio conditions</li>
                                <li>• <strong>Multi-task</strong>: Single system for recognition, translation, and identification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
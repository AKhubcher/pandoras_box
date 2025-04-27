import Image from "next/image";
import Link from "next/link";

export default function DeepSpeechPage() {
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
                        <h1 className="inline-block text-4xl font-bold mb-2">Deep Speech</h1>
                        <p className="inline-block m-4 text-green-400">free</p>
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
                                    DeepSpeech is an open-source speech recognition system developed by Mozilla that:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Converts spoken language into text using deep learning techniques</li>
                                    <li>Implements an end-to-end neural network architecture</li>
                                    <li>Processes audio directly to text without intermediate components</li>
                                    <li>Runs efficiently on various devices from servers to consumer hardware</li>
                                </ul>
                                <p>
                                    Built on research published by Baidu's Silicon Valley AI Lab, DeepSpeech has been continuously improved through community contributions, focusing on accuracy, speed, and reduced model size for practical applications.
                                </p>
                            </div>
                        </div>

                        <div id="instructions" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <div className="space-y-3">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">1. Installation Options</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>Python Package:</strong> Install via pip</li>
                                        <li><strong>Pre-built Binaries:</strong> Available for multiple platforms</li>
                                        <li><strong>Docker:</strong> Containerized deployment</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`# Python installation
pip install deepspeech

# Download pre-trained English model
curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/deepspeech-0.9.3-models.pbmm
curl -LO https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/deepspeech-0.9.3-models.scorer`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Basic Usage</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Load the pre-trained model</li>
                                        <li>Prepare audio in supported format (16kHz, 16-bit mono)</li>
                                        <li>Process audio through the model</li>
                                        <li>Access transcription results</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Model Configuration</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>Beam width:</strong> Controls accuracy vs. performance trade-off</li>
                                        <li><strong>Language model:</strong> Optional scorer for improved accuracy</li>
                                        <li><strong>Advanced parameters:</strong> Fine-tune for specific use cases</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4. Custom Training</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Prepare training data with transcriptions</li>
                                        <li>Set up training environment</li>
                                        <li>Run training process with appropriate parameters</li>
                                        <li>Evaluate and optimize model performance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Core Features</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• End-to-end speech recognition</li>
                                        <li>• Language identification</li>
                                        <li>• Streaming transcription</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Technical Aspects</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Cross-platform support</li>
                                        <li>• TensorFlow-based architecture</li>
                                        <li>• CPU & GPU acceleration</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Integration Options</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• C, Python, JavaScript APIs</li>
                                        <li>• Command-line interface</li>
                                        <li>• Microservice deployment</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Practical Applications</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Transcription services</li>
                                        <li>• Voice assistants</li>
                                        <li>• Accessibility tools</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Basic Python usage
import deepspeech
import numpy as np
import wave

# Load pre-trained model
model = deepspeech.Model('deepspeech-0.9.3-models.pbmm')
model.enableExternalScorer('deepspeech-0.9.3-models.scorer')

# Process audio file
def transcribe_file(audio_file):
    w = wave.open(audio_file, 'r')
    frames = w.readframes(w.getnframes())
    buffer = np.frombuffer(frames, np.int16)
    text = model.stt(buffer)
    return text

result = transcribe_file('audio.wav')`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`// Stream processing example
import deepspeech
import numpy as np

model = deepspeech.Model('deepspeech-0.9.3-models.pbmm')
model.enableExternalScorer('deepspeech-0.9.3-models.scorer')

# Create streaming session
stream = model.createStream()

# Process audio in chunks (e.g., from microphone)
def process_audio_chunk(audio_chunk):
    buffer = np.frombuffer(audio_chunk, np.int16)
    stream.feedAudioContent(buffer)
    
# Get final result when done
text = stream.finishStream()`}
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
                                <li>• <strong>Open Source</strong>: Community-driven development</li>
                                <li>• <strong>Cross-platform</strong>: Works on many devices</li>
                                <li>• <strong>Lightweight</strong>: Optimized for performance</li>
                                <li>• <strong>Multilingual</strong>: Support for various languages</li>
                                <li>• <strong>Customizable</strong>: Train with domain-specific data</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
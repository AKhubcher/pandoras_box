import Image from "next/image";
import Link from "next/link";

export default function GPT4Page() {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/generation/text" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Generation
                    </Link>
                </div>

                {/* Model Header */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="w-24 h-24 bg-purple-900/50 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-purple-600/50 rounded-full" />
                    </div>
                    <div className="flex-1">
                        <h1 className="inline-block text-4xl font-bold mb-2">Llama</h1>
                        <p className="inline-block m-4 text-green-400">free</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> Llama 2/3
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://ai.meta.com/llama/" style={{ textDecoration: "underline", color: '#3D90D7' }}>Meta AI</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Open-weights, Foundation-model, Self-hostable
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://huggingface.co/docs/transformers/main/model_doc/llama2" style={{ textDecoration: "underline", color: '#3D90D7' }}>HuggingFace</a>
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
                                    Llama is Meta's series of open-weight large language models offering:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>State-of-the-art performance in its class</li>
                                    <li>Available in multiple sizes (7B to 70B parameters)</li>
                                    <li>Commercial-friendly licensing (Llama 2/3)</li>
                                    <li>Optimized for both research and production use</li>
                                </ul>
                                <p>
                                    Unlike closed models, Llama provides transparency in weights and architecture while maintaining competitive performance with proprietary alternatives.
                                </p>
                            </div>
                        </div>

                        <div id="instructions" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <div className="space-y-3">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">1. Deployment Options</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>Self-hosted:</strong> Run locally via HuggingFace Transformers</li>
                                        <li><strong>Cloud API:</strong> Use providers like Replicate or Anyscale</li>
                                        <li><strong>Quantized:</strong> GGUF models for consumer hardware</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`# Using HuggingFace Transformers
from transformers import AutoTokenizer, AutoModelForCausalLM

model = "meta-llama/Llama-2-7b-chat-hf"
tokenizer = AutoTokenizer.from_pretrained(model)
llm = AutoModelForCausalLM.from_pretrained(model)

inputs = tokenizer("Your prompt here", return_tensors="pt")
outputs = llm.generate(**inputs)`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Prompt Engineering</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Use Llama 2/3's special chat format for best results</li>
                                        <li>Include system messages for context/behavior</li>
                                        <li>Example structure:</li>
                                    </ul>
                                    <div className="mt-2 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`[INST] <<SYS>>
You are a helpful assistant
<</SYS>>

User's message here [/INST]`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Key Parameters</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>temperature:</strong> 0.1 (precise) to 1.0 (creative)</li>
                                        <li><strong>max_new_tokens:</strong> Control response length</li>
                                        <li><strong>top_p:</strong> 0.9 recommended for most cases</li>
                                        <li><strong>repetition_penalty:</strong> Reduce word repetition</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4-6. Optimization</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Fine-tune with LoRA for domain-specific tasks</li>
                                        <li>Use quantization (4-bit/8-bit) for efficiency</li>
                                        <li>Implement moderation layers for production</li>
                                        <li>Monitor performance with eval benchmarks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Language Tasks</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Conversational AI (chat models)</li>
                                        <li>• Text summarization</li>
                                        <li>• Translation</li>
                                        <li>• Question answering</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Code Generation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Code completion</li>
                                        <li>• Debugging assistance</li>
                                        <li>• Documentation generation</li>
                                        <li>• Multiple language support</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Creative Applications</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Story writing</li>
                                        <li>• Content creation</li>
                                        <li>• Poetry generation</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Reasoning</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Logical problem solving</li>
                                        <li>• Mathematical reasoning</li>
                                        <li>• Decision support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`# Basic Text Generation
from transformers import pipeline

llm = pipeline("text-generation", model="meta-llama/Llama-2-7b-chat-hf")
response = llm("[INST] Explain quantum computing [/INST]")`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`# Chat Completion Example
messages = [
    {"role": "system", "content": "You are a helpful assistant"},
    {"role": "user", "content": "What's the capital of France?"}
]
response = llm(messages, temperature=0.7)`}
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
                                <li>• <strong>Open Weights</strong>: Full model access</li>
                                <li>• <strong>Multiple Sizes</strong>: 7B to 70B parameters</li>
                                <li>• <strong>Optimized Inference</strong>: Runs on consumer hardware</li>
                                <li>• <strong>Fine-tuning Support</strong>: Adapt to specific domains</li>
                                <li>• <strong>Commercial Use</strong>: Llama 2/3 license</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
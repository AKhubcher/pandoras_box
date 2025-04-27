import Image from "next/image";
import Link from "next/link";

export default function BartPage() {
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
                        <h1 className="inline-block text-4xl font-bold mb-2">Bart</h1>
                        <p className="inline-block m-4 text-green-400">free</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> Bart
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://huggingface.co/docs/transformers/en/model_doc/bart" style={{ textDecoration: "underline", color: '#3D90D7' }}>Bart</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Denoising, Sequence-to-sequence, Text-reconstruction
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://huggingface.co/docs/transformers/installation" style={{ textDecoration: "underline", color: '#3D90D7' }}>Docs</a>
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
                                    BART (Bidirectional and Auto-Regressive Transformers) provides a versatile framework for NLP tasks:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Combines bidirectional encoding (BERT) with auto-regressive decoding (GPT)</li>
                                    <li>Pre-trained by corrupting text with noise and learning to reconstruct it</li>
                                    <li>Excels at text generation, comprehension, and transformation tasks</li>
                                    <li>Developed by Facebook AI in 2019 for sequence-to-sequence applications</li>
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
                                        <li><strong>Hugging Face:</strong> Import transformers library</li>
                                        <li><strong>PyTorch:</strong> Load pre-trained weights</li>
                                        <li><strong>API:</strong> Access via Hugging Face Inference API</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Implementation Steps</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Install dependencies with <code>pip install transformers torch</code></li>
                                        <li>Import model and tokenizer classes</li>
                                        <li>Initialize with pre-trained weights</li>
                                        <li>Process text through tokenizer and model pipeline</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Key Parameters</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>num_beams:</strong> Controls beam search (higher = better quality)</li>
                                        <li><strong>max_length:</strong> Limit output token count</li>
                                        <li><strong>length_penalty:</strong> Favor shorter/longer sequences</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4. Refinement & Best Practices</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Fine-tune on domain-specific data when possible</li>
                                        <li>Use early stopping for efficient generation</li>
                                        <li>Implement post-processing for better outputs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Text Summarization</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• News article condensation</li>
                                        <li>• Document abstractive summaries</li>
                                        <li>• Meeting notes generation</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Translation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Multi-language support</li>
                                        <li>• Context-aware translations</li>
                                        <li>• Domain adaptation</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Text Generation</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Question answering</li>
                                        <li>• Content completion</li>
                                        <li>• Dialogue systems</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Text Reconstruction</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Error correction</li>
                                        <li>• Denoising documents</li>
                                        <li>• Content restoration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`# Text Summarization with BART
from transformers import BartTokenizer, BartForConditionalGeneration

# Load pre-trained model and tokenizer
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')
model = BartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')

# Prepare input text
article_text = "Your long article text goes here..."
inputs = tokenizer([article_text], max_length=1024, return_tensors='pt')

# Generate summary
summary_ids = model.generate(inputs['input_ids'], num_beams=4, 
                            max_length=150, early_stopping=True)
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
print(summary)`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`# Fine-tuning BART for a custom task
from transformers import BartTokenizer, BartForConditionalGeneration
from transformers import Trainer, TrainingArguments

# Load model and tokenizer
model = BartForConditionalGeneration.from_pretrained('facebook/bart-base')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-base')

# Set up training arguments
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=4,
    save_steps=10_000,
    save_total_limit=2,
)

# Initialize trainer and start fine-tuning
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=your_dataset,
    data_collator=your_data_collator,
)

trainer.train()`}
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
                                <li>• <strong>Bidirectional Encoding</strong>: Complete context understanding</li>
                                <li>• <strong>Noise-Based Pre-training</strong>: Robust to input variations</li>
                                <li>• <strong>Multiple Sizes</strong>: base, large, large-cnn variants</li>
                                <li>• <strong>Task Flexibility</strong>: Single architecture for many tasks</li>
                                <li>• <strong>Fine-tuning Friendly</strong>: Adapts well to specific domains</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Image from "next/image";
import Link from "next/link";

export default function BertPage() {
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
                        <h1 className="text-4xl font-bold mb-2">BERT</h1>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Model Name:</span> BERT (Bidirectional Encoder Representations from Transformers)
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Docs:</span> <a href="https://huggingface.co/docs/transformers/en/model_doc/bert" style={{ textDecoration: "underline", color: '#3D90D7' }}>Hugging Face</a>
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Keywords:</span> Bidirectional, Language-understanding, Transformer-based
                            </div>
                            <div className="bg-purple-900/30 px-4 py-2 rounded-lg">
                                <span className="text-purple-400">Installation:</span> <a href="https://huggingface.co/docs/transformers/installation" style={{ textDecoration: "underline", color: '#3D90D7' }}>Hugging Face Transformers</a>
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
                                    BERT (Bidirectional Encoder Representations from Transformers) is a natural language processing model developed by Google in 2018 that revolutionized how machines understand human language. Unlike its predecessors that processed text in a single direction, BERT analyzes text bidirectionally by examining the context of words in relation to all other words in a sentence, rather than just looking at words that come before or after sequentially.
                                </p>
                                <p>
                                    BERT's key innovation is its pre-training method, where it learns to predict randomly masked words in a sentence and understand relationships between sentences. After this general language understanding is established, BERT can be fine-tuned with additional training data for specific tasks such as classification, named entity recognition, or question answering, often achieving state-of-the-art results with relatively little task-specific data.
                                </p>
                            </div>
                        </div>

                        <div id="instructions" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                            <div className="space-y-3">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">1. Choose Implementation Method</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>Hugging Face Transformers:</strong> Most popular and easiest method</li>
                                        <li><strong>TensorFlow Hub:</strong> Google's official implementation</li>
                                        <li><strong>PyTorch:</strong> Flexible implementation for research</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`# Using Hugging Face Transformers
from transformers import BertModel, BertTokenizer

# Load pre-trained model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">2. Prepare Your Text</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Tokenize and encode your input text</li>
                                        <li>Handle padding and attention masks</li>
                                        <li>Convert to appropriate format (PyTorch tensors, TensorFlow tensors)</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`# Tokenize and encode
text = "Example sentence to encode."
encoded_input = tokenizer(text, return_tensors='pt', padding=True, truncation=True)

# encoded_input will contain input_ids, token_type_ids, and attention_mask`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">3. Run Inference or Fine-Tuning</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li><strong>Inference:</strong> Get embeddings from pre-trained BERT</li>
                                        <li><strong>Fine-tuning:</strong> Train on specific task with labeled data</li>
                                        <li><strong>Common tasks:</strong> Classification, NER, Q&A, sentiment analysis</li>
                                    </ul>
                                    <div className="mt-3 font-mono text-xs bg-gray-800 p-3 rounded">
                                        {`# Get embeddings (inference)
outputs = model(**encoded_input)
embeddings = outputs.last_hidden_state  # Shape: [batch_size, sequence_length, hidden_size]
pooled_output = outputs.pooler_output  # Shape: [batch_size, hidden_size]`}
                                    </div>
                                </div>

                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold">4. Use the Results</h3>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm">
                                    <ul className="space-y-2">
                                        <li>Extract contextual word embeddings for token-level tasks</li>
                                        <li>Use pooled output for sentence-level tasks</li>
                                        <li>Pass to downstream task-specific layers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="capabilities" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Text Classification</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Sentiment analysis</li>
                                        <li>• Topic categorization</li>
                                        <li>• Intent detection</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Named Entity Recognition</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Person, organization, location detection</li>
                                        <li>• Product and brand identification</li>
                                        <li>• Domain-specific entity extraction</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Question Answering</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Extractive QA from documents</li>
                                        <li>• Context understanding</li>
                                        <li>• Information retrieval</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-900/30 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">Semantic Analysis</h3>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Paraphrase detection</li>
                                        <li>• Textual similarity assessment</li>
                                        <li>• Text summarization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="examples" className="bg-gray-800/50 rounded-xl p-6 scroll-mt-16">
                            <h2 className="text-2xl font-bold mb-4">Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`# Example: Sentiment analysis with BERT
from transformers import BertForSequenceClassification, BertTokenizer
import torch

# Load fine-tuned model and tokenizer
model_name = "nlptown/bert-base-multilingual-uncased-sentiment"
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForSequenceClassification.from_pretrained(model_name)

# Prepare input
text = "I love this product! It works exactly as described."
inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)

# Get prediction
with torch.no_grad():
    outputs = model(**inputs)
    
# Get predicted class (1-5 stars)
predicted_class = torch.argmax(outputs.logits, dim=1).item() + 1
print(f"Sentiment rating: {predicted_class} stars")`}
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm">
                                    {`# Example: Named Entity Recognition with BERT
from transformers import BertForTokenClassification, BertTokenizer
import torch

# Load fine-tuned model for NER
model_name = "dslim/bert-base-NER"
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForTokenClassification.from_pretrained(model_name)

# Prepare input
text = "Apple is looking at buying U.K. startup for $1 billion"
inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)

# Get predictions
with torch.no_grad():
    outputs = model(**inputs)
    
predictions = torch.argmax(outputs.logits, dim=2)
    
# Map predictions to tokens and labels
tokens = tokenizer.convert_ids_to_tokens(inputs["input_ids"][0])
label_list = model.config.id2label
labels = [label_list[prediction.item()] for prediction in predictions[0]]

# Process results
for token, label in zip(tokens, labels):
    print(f"{token}: {label}")`}
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
                                <li>• <strong>Bidirectional Context:</strong> Examines words from both directions</li>
                                <li>• <strong>Pre-training/Fine-tuning:</strong> Transfer learning approach</li>
                                <li>• <strong>Masked Language Modeling:</strong> Predicts missing words</li>
                                <li>• <strong>Next Sentence Prediction:</strong> Understands sentence relationships</li>
                                <li>• <strong>WordPiece Tokenization:</strong> Handles rare words effectively</li>
                            </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Available Variants</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• <strong>BERT-Base:</strong> 12 layers, 110M parameters</li>
                                <li>• <strong>BERT-Large:</strong> 24 layers, 340M parameters</li>
                                <li>• <strong>DistilBERT:</strong> Lightweight, 40% smaller, 60% faster</li>
                                <li>• <strong>RoBERTa:</strong> Optimized BERT training</li>
                                <li>• <strong>Multilingual BERT:</strong> Supports 104 languages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
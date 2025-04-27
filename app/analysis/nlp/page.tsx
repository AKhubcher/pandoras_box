import Link from "next/link";

const nlpModels = [
  {
    name: "GPT-4",
    description: "Generative Pre-trained Transformer 4 (GPT-4) is a multimodal large language model trained and created by OpenAI and the fourth in its series of GPT foundation models. It was launched on March 14, 2023, and made publicly available via the paid chatbot product ChatGPT Plus, via OpenAI's API, and via the free chatbot Microsoft Copilot. As a transformer-based model, GPT-4 uses a paradigm where pre-training using both public data and 'data licensed from third- party providers' is used to predict the next token. After this step, the model was then fine-tuned with reinforcement learning feedback from humans and AI for human alignment and policy compliance",
    capabilities: ["Text generation", "Language understanding", "Code generation", "Creative writing"],
    path: "/analysis/nlp/gpt4"
  },
  {
    name: "BERT",
    description: "BERT is a bidirectional transformer pretrained on unlabeled text to predict masked tokens in a sentence and to predict whether one sentence follows another. The main idea is that by randomly masking some tokens, the model can train on text to the left and right, giving it a more thorough understanding. BERT is also very versatile because its learned language representations can be adapted for other NLP tasks by fine-tuning an additional layer or head",
    capabilities: ["Pre-Trained", "Understanding Text, Can't Generate Text", "Fine Tunable on NLP tasks", "Open-Sources", "Widely Adopted"],
    path: "/analysis/nlp/bert"
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

        <h1 className="text-4xl font-bold mb-4">Natural Language Processing</h1>
        <p className="text-xl text-gray-400 mb-8">
          Explore our collection of NLP models that help machines understand, interpret, and generate human language.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nlpModels.map((model) => (
            <div key={model.name} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
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
// lib/searchUtils.ts

export interface SearchResult {
  name: string;
  type: string;
  category: string;
  description: string;
}

const modelCatalog: SearchResult[] = [
  {
    name: "BART",
    type: "Text Generation",
    category: "generation/text",
    description: "Bidirectional and Auto-Regressive Transformers for text generation"
  },
  {
    name: "BERT",
    type: "NLP",
    category: "analysis/nlp",
    description: "Bidirectional Encoder Representations from Transformers"
  },
  {
    name: "DALL-E",
    type: "Image Generation",
    category: "generation/image",
    description: "OpenAI's image generation model"
  },
  {
    name: "DeepAI",
    type: "Image Generation",
    category: "generation/image",
    description: "DeepAI's image generation and processing models"
  },
  {
    name: "DeepSpeech",
    type: "Speech Recognition",
    category: "analysis/audio",
    description: "Mozilla's open-source speech recognition model"
  },
  {
    name: "GPT-4",
    type: "Text Generation",
    category: "generation/text",
    description: "OpenAI's most advanced language model"
  },
  {
    name: "Llama",
    type: "Text Generation",
    category: "generation/text",
    description: "Meta's open-source large language model"
  },
  {
    name: "Whisper",
    type: "Speech Recognition",
    category: "analysis/audio",
    description: "OpenAI's speech recognition model"
  },
  {
    name: "YOLO",
    type: "Computer Vision",
    category: "analysis/vision",
    description: "You Only Look Once - real-time object detection"
  },
  {
    name: "MusicLM",
    type: "Audio Generation",
    category: "generation/audio",
    description: "Google's music generation model"
  },
  {
    name: "Copilot",
    type: "Code Generation",
    category: "generation/code",
    description: "GitHub's AI pair programming assistant"
  }
];

export function searchModels(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  const queryTerms = lowerQuery.split(/\s+/); // Split query into terms
  
  return modelCatalog.filter(item => {
    const searchableText = [
      item.name.toLowerCase(),
      item.type.toLowerCase(),
      item.description.toLowerCase(),
      item.category.toLowerCase().split('/').join(' ') // Add category as searchable text
    ].join(' ');
    
    // Check if all query terms are found in the searchable text
    return queryTerms.every(term => searchableText.includes(term));
  });
}

export function getModelDetails(name: string): SearchResult | undefined {
  return modelCatalog.find(item => item.name.toLowerCase() === name.toLowerCase());
}
  
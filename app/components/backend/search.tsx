// lib/searchUtils.ts

const items = [
    {name: "BART"},
    {name: "BERT"},
    {name: "DALL-E"},
    {name: "DeepAI"},
    {name: "DeepSpeech"},
    {name: "GPT-4"},
    {name: "Llama"},
    {name: "Whisper"}
  ];
  
  export function basicSearch(query: string) {
    const lowerQuery = query.toLowerCase();
  
    return items.filter(item =>
      item.name.toLowerCase().includes(lowerQuery) 
    );
  }
  
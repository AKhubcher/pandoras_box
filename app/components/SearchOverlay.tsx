"use client";

import { useState, useEffect } from 'react';

interface SearchOverlayProps {
  onClose: () => void;
}

type SearchTab = 'models' | 'prompts';
type ViewMode = 'sidebar' | 'expanded';

interface SearchEntry {
  query: string;
  timestamp: number;
  tab: string;
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchTab>('models');
  const [viewMode, setViewMode] = useState<ViewMode>('sidebar');
  const [recentSearches, setRecentSearches] = useState<SearchEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRecentSearches();
  }, []);

  const fetchRecentSearches = async () => {
    try {
      const response = await fetch('/api/search');
      if (!response.ok) throw new Error('Failed to fetch recent searches');
      const data = await response.json();
      setRecentSearches(data);
    } catch (error) {
      console.error('Error fetching recent searches:', error);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          tab: activeTab,
        }),
      });

      if (!response.ok) throw new Error('Failed to save search');
      
      // Refresh recent searches
      fetchRecentSearches();
    } catch (error) {
      console.error('Error saving search:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'sidebar' ? 'expanded' : 'sidebar');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div 
        className={`bg-gray-900/95 rounded-2xl shadow-2xl transition-all duration-300 ${
          viewMode === 'sidebar' 
            ? 'w-[400px] h-[80vh] fixed right-8 top-1/2 -translate-y-1/2' 
            : 'w-[90vw] h-[80vh] max-w-6xl'
        }`}
      >
        <div className="absolute top-4 right-4 flex gap-2">
          {viewMode === 'sidebar' && (
            <>
              <button
                onClick={toggleViewMode}
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                title="Expand to browser view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          )}
          {viewMode === 'expanded' && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="h-full flex flex-col p-8">
          <div className={`mx-auto w-full ${viewMode === 'expanded' ? 'max-w-5xl' : ''}`}>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              AI Model Search
            </h2>
            
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-700">
              <button
                onClick={() => setActiveTab('models')}
                className={`pb-4 px-2 relative ${activeTab === 'models' ? 'text-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                Search Models
                {activeTab === 'models' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('prompts')}
                className={`pb-4 px-2 relative ${activeTab === 'prompts' ? 'text-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                Find Best Model
                {activeTab === 'prompts' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600" />
                )}
              </button>
            </div>
            
            {/* Search Input */}
            <div className="relative mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                placeholder={
                  activeTab === 'models' 
                    ? "Search for specific AI models..." 
                    : "Describe what you want to achieve..."
                }
                className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
              <button 
                onClick={handleSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-6 w-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Results Area */}
            <div className="bg-gray-800/50 rounded-xl p-6 min-h-[300px]">
              {activeTab === 'models' ? (
                <div className="space-y-4">
                  <p className="text-gray-400">
                    {searchQuery ? "Searching for AI models..." : "Search for specific AI models by name, type, or capabilities"}
                  </p>
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && !searchQuery && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Recent Searches</h3>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchQuery(search.query)}
                            className="block w-full text-left p-2 rounded hover:bg-gray-700/50 transition-colors"
                          >
                            <span className="text-purple-400">{search.query}</span>
                            <span className="text-xs text-gray-500 ml-2">
                              {new Date(search.timestamp).toLocaleDateString()}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Placeholder for model results */}
                  <div className={`grid gap-4 ${viewMode === 'expanded' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    <div className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                      <h3 className="font-bold text-purple-400">Model Name</h3>
                      <p className="text-sm text-gray-400">Description of the model's capabilities</p>
                    </div>
                    {viewMode === 'expanded' && (
                      <div className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                        <h3 className="font-bold text-purple-400">Model Name</h3>
                        <p className="text-sm text-gray-400">Description of the model's capabilities</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-400">
                    {searchQuery ? "Finding the best model for your needs..." : "Describe what you want to achieve, and we'll recommend the best AI model for your task"}
                  </p>
                  {/* Placeholder for prompt-based results */}
                  <div className="p-4 rounded-lg bg-gray-700/50">
                    <h3 className="font-bold text-purple-400">Recommended Model</h3>
                    <p className="text-sm text-gray-400">Based on your description, this model would be the best fit because...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
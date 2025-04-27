"use client";

import { useState, useEffect } from 'react';
import { searchModels, SearchResult } from './backend/search';

interface SearchOverlayProps {
  onClose: () => void;
}

type ViewMode = 'sidebar' | 'expanded';

interface SearchEntry {
  query: string;
  timestamp: number;
  tab: string;
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('sidebar');
  const [recentSearches, setRecentSearches] = useState<SearchEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    fetchRecentSearches();
  }, []);

  const fetchRecentSearches = async () => {
    try {
      const response = await fetch('/api/search');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
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
      // Perform local search
      const results = searchModels(searchQuery);
      setSearchResults(results);

      // Save search to history
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
          tab: 'models',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Refresh recent searches
      await fetchRecentSearches();
    } catch (error) {
      console.error('Error performing search:', error);
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
        className={`bg-gray-900/95 rounded-2xl shadow-2xl transition-all duration-300 ${viewMode === 'sidebar'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
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

            {/* Search Input */}
            <div className="relative mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                placeholder="Search for AI models..."
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
            <div className="bg-gray-800/50 rounded-xl p-6">
              {isLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="h-8 w-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : searchQuery ? (
                searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((result, index) => (
                      <div key={index} className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                        <h3 className="font-bold text-purple-400">{result.name}</h3>
                        <p className="text-sm text-gray-400">{result.type}</p>
                        <p className="text-sm text-gray-500 mt-2">{result.description}</p>
                        <a
                          href={`/${result.category}/${result.name.toLowerCase()}`}
                          className="text-sm text-purple-400 hover:text-purple-300 mt-2 inline-block"
                        >
                          View Details →
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center">search for "{searchQuery}" ↵</p>
                )
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Search for AI models by name, type, or capabilities
                  </p>
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Recent Searches</h3>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchQuery(search.query);
                              handleSearch();
                            }}
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { NextResponse } from 'next/server';

// In-memory storage for search history (replace with database in production)
let searchHistory: Array<{ query: string; timestamp: number; tab: string }> = [];

export async function GET() {
  try {
    // Return recent searches sorted by timestamp (newest first)
    const recentSearches = searchHistory
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10); // Limit to 10 most recent searches
    
    return NextResponse.json(recentSearches);
  } catch (error) {
    console.error('Error fetching search history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch search history' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query, tab } = body;

    if (!query || !tab) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add new search to history
    searchHistory.push({
      query,
      tab,
      timestamp: Date.now(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving search:', error);
    return NextResponse.json(
      { error: 'Failed to save search' },
      { status: 500 }
    );
  }
} 
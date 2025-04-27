import { NextResponse } from 'next/server';


// In-memory storage for demo purposes
// In a real app, this would be a database
let searchHistory: { query: string; timestamp: number; tab: string }[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query, tab } = body;

    if (!query || !tab) {
      return NextResponse.json(
        { error: 'Query and tab are required' },
        { status: 400 }
      );
    }

    const searchEntry = {
      query,
      tab,
      timestamp: Date.now(),
    };

    searchHistory.push(searchEntry);

    return NextResponse.json(searchEntry);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process search' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return the last 10 searches
    const recentSearches = searchHistory
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10);

    return NextResponse.json(recentSearches);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch search history' },
      { status: 500 }
    );
  }
} 
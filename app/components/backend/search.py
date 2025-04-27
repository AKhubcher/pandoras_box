# Sample data — a list of items with 'title' and 'description'
items = [
    {"name": "BART"},
    {"name": "BERT"},
    {"name": "DALL-E"},
    {"name": "DeepAI"},
    {"name": "DeepSpeech"},
    {"name": "GPT-4"},
    {"name": "Llama"},
    {"name": "Whisper"}
]

def basic_search(query, items):
    """
    Parameters:
    - query (str): The search term entered by the user.
    - items (list): The list of dictionaries to search through.

    Returns:
    - list: Items that match the query in either title or description.
    """
    
    # Convert the query to lowercase for case-insensitive comparison
    query = query.lower()

    # Create a list to hold matched results
    results = []

    # Loop through each item in the list
    for item in items:
        # Check if the query is in the title or description
        if query in item['title'].lower():
            results.append(item)  # Add matching item to results

    # Return all matching results
    return results


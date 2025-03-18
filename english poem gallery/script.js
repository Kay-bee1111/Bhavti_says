// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if the poemsData is available
    if (typeof poemsData !== 'undefined') {
        renderPoems(poemsData);
    } else {
        console.error('Poems data not available');
        document.getElementById('poem-grid').innerHTML = '<p>Error loading poems. Please try again later.</p>';
    }
});

/**
 * Render poems to the grid
 * @param {Array} poems - Array of poem objects
 */
function renderPoems(poems) {
    const grid = document.getElementById('poem-grid');
    grid.innerHTML = '';

    poems.forEach(poem => {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div>
                        <div class="poem-title">${poem.title}</div>
                        <div class="poem-author">by ${poem.author}</div>
                    </div>
                </div>
                <div class="card-back">
                    <div class="poem-description">${poem.description}</div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openPoemPage(poem));
        grid.appendChild(card);
    });
}

/**
 * Open a new page with the full poem
 * @param {Object} poem - Poem object with title, author, description and content
 */
function openPoemPage(poem) {
    // Create a new window for the poem
    const poemWindow = window.open('', '_blank');
    
    // Write the poem content to the new window
    poemWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${poem.title} - ${poem.author}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
                
                body {
                    background-color: #f9f9f9;
                    color: #333;
                    padding: 2rem;
                    line-height: 1.6;
                }
                
                .poem-container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: white;
                    padding: 3rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
                
                .poem-header {
                    text-align: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #eee;
                }
                
                .poem-title {
                    font-size: 2.5rem;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }
                
                .poem-author {
                    font-size: 1.2rem;
                    color: #7f8c8d;
                    font-style: italic;
                }
                
                .poem-content {
                    font-size: 1.1rem;
                    white-space: pre-line;
                    margin-bottom: 2rem;
                }
                
                .poem-description {
                    font-style: italic;
                    color: #555;
                    margin-bottom: 2rem;
                    padding: 1rem;
                    background-color: #f5f5f5;
                    border-radius: 4px;
                }
                
                .back-button {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background-color: #3498db;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    transition: background-color 0.3s;
                    cursor: pointer;
                    border: none;
                }
                
                .back-button:hover {
                    background-color: #2980b9;
                }
            </style>
        </head>
        <body>
            <div class="poem-container">
                <div class="poem-header">
                    <h1 class="poem-title">${poem.title}</h1>
                    <p class="poem-author">by ${poem.author}</p>
                </div>
                
                <div class="poem-description">${poem.description}</div>
                
                <div class="poem-content">${poem.content}</div>
                
                <button class="back-button" onclick="window.close()">Back to Collection</button>
            </div>
        </body>
        </html>
    `);
    
    // Close the document to finish writing
    poemWindow.document.close();
}
// Fetch the current affairs data dynamically using an API
async function fetchCurrentAffairs() {
    try {
        // Example API call (replace with a real news API URL or your own server URL)
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=YOUR_NEWS_API_KEY');
        const data = await response.json();

        // Check if the response is successful
        if (data.status === 'ok') {
            const currentAffairsSection = document.getElementById('current-affairs-content');
            currentAffairsSection.innerHTML = ''; // Clear existing content

            data.articles.forEach(article => {
                // Create a new article item dynamically
                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                    <hr>
                `;
                currentAffairsSection.appendChild(articleDiv);
            });
        } else {
            throw new Error('Failed to fetch current affairs');
        }
    } catch (error) {
        document.getElementById('current-affairs-content').innerHTML = 'Error loading current affairs: ' + error.message;
    }
}

// Call the function to fetch data when the page loads
window.onload = fetchCurrentAffairs;

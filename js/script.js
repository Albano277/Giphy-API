// Confirms that the JavaScript file is connected and running
console.log("script.js loaded");

// Selects the GIF container from the HTML
const gifContainer = document.querySelector("#gif-container");

// Selects the Fetch a GIF button from the HTML
const button = document.querySelector("#fetch-gif-btn");

// Selects the search input from the HTML
const searchInput = document.querySelector("#search-input");

// Runs when the Fetch a GIF button is clicked
button.addEventListener("click", function () {

    // Gets the text entered in the search box
    const searchTerm = searchInput.value;

    // Clears the previous GIFs before displaying the new search
    gifContainer.innerHTML = "";

    // Creates the GIPHY API request URL using the search term
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=Q3yZLjcd96pF3rgciKGHeLZvtcwl61In&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    
    // Sends a request to the GIPHY API
    fetch(endpoint)
        // Converts the API response into JSON
        .then(response => response.json())
        .then(data => {
            // Gets the original URL for each GIF and stores them in an array
            const images = data.data.map(gif => gif.images.original.url);

            // Displays the array of GIF URLs in the browser console
            console.log(images);

            // Displays each GIF on the page
            images.forEach(imageUrl => {
                gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3">`;
            });
        })
        // Displays an error if the API request fails
        .catch(error => console.error("Error fetching data:", error));
});

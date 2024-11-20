// script.js

// sample news articles data
const newsArticles = [
    {
        headline: "Headline 1",
        descriptioni: "Brief description 1",
        imageUr1: "image1.jpg",
        timestamp: "2023-11-18"
    },
    // put more articles here
];

//function to create news article elements
function createNewsArticle(article) {
    // ... create HTML elements for the article
    // append the elements to the .news-articles section
}

// Fuction for this one is to creat the timeline visualization
function createTimeline() {
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);

    const timeline = document.querySelector(".timeline");
    timeline.innerHTML = ""; // to clear any existing markers

    const timeDifference = endDate - startDate;
    const numberOfmarkers = 5; // to adjust the number of markers as needed
    const markerInterval = timeDifference / numberOfmarkers;

    for (let i = 0; i <= numberOfmarkers; i++) {
        const markerDate = new Date(startDate.getTime() + i * markerInterval);
        const markerYear = markerDate.getFullYear();

        const marker = document.createElement("div");
        marker.classList.add("marker");
        marker.textContent = markerYear;
        timeline.appendChild(marker);
    }
}

// adding call function to populate the page
newsArticles.forEach(createNewsArticle);
createTimeline();
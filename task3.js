document.addEventListener("DOMContentLoaded", function() {
    // Interactive menu functionality
    const menuItems = document.querySelectorAll("#menu a");
    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Form validation and dynamic content update
    const recommendationForm = document.getElementById("recommendationForm");
    const recommendationsList = document.getElementById("recommendationsList");

    recommendationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();
        const genreInput = document.getElementById("genre").value.trim();
        const yearInput = document.getElementById("year").value.trim();

        // Basic form validation
        if (!emailInput || !passwordInput || !genreInput || !yearInput || isNaN(yearInput)) {
            alert("Please enter valid inputs.");
            return;
        }

        // Sanitize user input to prevent XSS
        const sanitizedEmail = sanitizeInput(emailInput);
        const sanitizedPassword = sanitizeInput(passwordInput);
        const sanitizedGenre = sanitizeInput(genreInput);
        const sanitizedYear = sanitizeInput(yearInput);

        // Fetch movie recommendations (mocked here for example)
        const recommendations = getRecommendations(sanitizedGenre, sanitizedYear);

        // Update recommendations list
        recommendationsList.innerHTML = recommendations.map(movie => `<div>${movie}</div>`).join('');
    });

    // Function to sanitize user input
    function sanitizeInput(input) {
        const tempDiv = document.createElement("div");
        tempDiv.textContent = input;
        return tempDiv.innerHTML;
    }

    // Mock function to get movie recommendations
    function getRecommendations(genre, year) {
        // This is a mock function. Replace with actual API call or logic.
        return [
            `Movie 1 (${genre}, ${year})`,
            `Movie 2 (${genre}, ${year})`,
            `Movie 3 (${genre}, ${year})`
        ];
    }
});

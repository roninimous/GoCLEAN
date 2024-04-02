
document.addEventListener("DOMContentLoaded", function() {
    // Get current page URL without query string or hash
    var currentPage = window.location.pathname.split("/").pop();

    // Query all nav-link elements
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function(link) {
        // Check if nav-link href matches the current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Add 'active' class
        } else {
            link.classList.remove('active'); // Ensure only the correct link is marked active
        }
    });
});


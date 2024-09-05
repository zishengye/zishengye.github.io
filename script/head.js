// head.js

// Function to dynamically set the title and favicon
function setHeadContent(title, faviconPath) {
    // Set the title
    document.title = title;

    // Set the favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = faviconPath;
}

// Set the title and favicon for each page
document.addEventListener("DOMContentLoaded", function() {
    setHeadContent("Bridge Physics \& Data At Scale", "resources/logo.png");

    // Load the header content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.querySelector('header');
    const headerURL = 'header.html';

    fetch(headerURL)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error fetching header:', error));
});

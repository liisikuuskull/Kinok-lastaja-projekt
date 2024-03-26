// Fetch API abil teeme päringu filmiandmete API-le
fetch(`https://tv-api.com/en/API/Top250Movies/k_d4c2mo0f`)
    .then(response => {
        // Kontrollime vastuse olekut
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Tagastame JSON
        return response.json();
    })
    .then(data => {
        // Saadud filmiandmed
        const movieListElement = document.getElementById('movie-list');

        // Kuvame iga filmi andmed
        data.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p><strong>Rating:</strong> ${movie.rating}</p>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Genres:</strong> ${movie.genres.join(', ')}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <a href="${movie.url}" target="_blank">More Info</a>
                <hr>
            `;
            movieListElement.appendChild(movieElement);
        });
    })
    .catch(error => {
        // Viga kuvatakse konsoolis
        console.error('Error fetching movie data:', error);
    });

let favoriteList = [];


function updateFavoriteList() {
    const favoriteListContainer = document.getElementById('favorite-list');


    favoriteListContainer.innerHTML = '';

    if (favoriteList.length === 0) {
        favoriteListContainer.innerHTML = '<p>No tienes estacionamientos en favoritos aún.</p>';
    } else {
        favoriteList.forEach(parking => {
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.innerHTML = `<p>${parking}</p>`;
            favoriteListContainer.appendChild(favoriteItem);
        });
    }
}


function toggleFavorite(button) {
    const parkingName = button.getAttribute('data-parking');
    const isFavorite = favoriteList.includes(parkingName);

    if (!isFavorite) {

        favoriteList.push(parkingName);
        button.textContent = 'Eliminar de favoritos';
    } else {

        favoriteList = favoriteList.filter(parking => parking !== parkingName);
        button.textContent = 'Añadir a favoritos';
    }

    updateFavoriteList();
}


document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', function() {
        toggleFavorite(button);
    });
});


updateFavoriteList();

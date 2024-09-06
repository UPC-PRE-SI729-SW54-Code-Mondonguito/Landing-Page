let favoriteList = []; // Lista para almacenar los estacionamientos favoritos

// Función para actualizar la lista de favoritos en la interfaz
function updateFavoriteList() {
    const favoriteListContainer = document.getElementById('favorite-list');

    // Limpiamos el contenido de la lista de favoritos
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

// Función para gestionar clics en el botón de favoritos
function toggleFavorite(button) {
    const parkingName = button.getAttribute('data-parking');
    const isFavorite = favoriteList.includes(parkingName);

    if (!isFavorite) {
        // Añadir a favoritos
        favoriteList.push(parkingName);
        button.textContent = 'Eliminar de favoritos'; // Cambiar texto del botón
    } else {
        // Quitar de favoritos
        favoriteList = favoriteList.filter(parking => parking !== parkingName);
        button.textContent = 'Añadir a favoritos'; // Cambiar texto del botón
    }

    updateFavoriteList(); // Actualizar la lista de favoritos en la UI
}

// Añadir evento click a los botones de favoritos
document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', function() {
        toggleFavorite(button);
    });
});

// Inicializar la lista de favoritos vacía
updateFavoriteList();

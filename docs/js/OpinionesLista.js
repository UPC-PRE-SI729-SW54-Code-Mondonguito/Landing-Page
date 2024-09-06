document.getElementById('showReviewsButton').addEventListener('click', function() {
    const reviewsSection = document.getElementById('reviewsSection');
    reviewsSection.classList.toggle('hidden');
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.querySelector('input[name="rate"]:checked');

    if (name && review && rating) {
        const reviewsList = document.getElementById('reviewsList');

        // Crear una representación visual de las estrellas seleccionadas
        const ratingValue = rating.value;
        const stars = '★'.repeat(ratingValue) + '☆'.repeat(5 - ratingValue);

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${name}</strong> - Calificación: ${stars}<br>${review}`;
        reviewsList.appendChild(listItem);

        // Limpiar el formulario
        document.getElementById('feedbackForm').reset();
    }
});
document.getElementById('shareButton').addEventListener('click', function() {
    var shareOptions = document.getElementById('shareOptions');
    shareOptions.classList.toggle('hidden');
});

function getShareUrl(network) {
    var url = encodeURIComponent('https://www.parkingnow.com');
    var text = encodeURIComponent('¡Comparte tu experiencia con PARKINGNOW! Visítanos para más detalles.');
    switch (network) {
        case 'facebook':
            return `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
        case 'twitter':
            return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        case 'linkedin':
            return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        default:
            return '#';
    }
}

document.getElementById('share-facebook').href = getShareUrl('facebook');
document.getElementById('share-twitter').href = getShareUrl('twitter');
document.getElementById('share-linkedin').href = getShareUrl('linkedin');

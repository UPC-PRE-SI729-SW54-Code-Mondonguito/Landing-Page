document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMision").addEventListener("click", function() {
        document.getElementById("Mision").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("btnVision").addEventListener("click", function() {
        document.getElementById("Vision").scrollIntoView({ behavior: "smooth" });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const messages = document.getElementById("messages");

    chatButton.addEventListener("click", () => {
        chatBox.style.display = "flex";
    });

    closeChat.addEventListener("click", () => {
        chatBox.style.display = "none";
    });

    window.userChoice = function (choice) {
        const userMessage = document.createElement("div");
        userMessage.textContent = "Tú: " + choice;
        messages.appendChild(userMessage);

        const responseMessage = document.createElement("div");
        responseMessage.textContent = "PARKINGNOW: " + getResponse(choice);
        messages.appendChild(responseMessage);

        messages.scrollTop = messages.scrollHeight;
    }

    function getResponse(choice) {
        switch (choice) {
            case "Disponibilidad de estacionamientos":
                return "Puedes encontrar estacionamientos disponibles en Lima, Arequipa, y Cusco.";
            case "reservation":
                return "Para reservar un espacio, selecciona la ciudad y elige un estacionamiento disponible.";
            case "Rutas óptimas para el estacionamiento":
                return "Te proporcionamos las rutas más óptimas basadas en tu ubicación actual.";
            default:
                return "Lo siento, no entendí tu elección.";
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPromotions, handleError);
    } else {
        console.error("La geolocalización no es soportada por este navegador.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const messages = document.getElementById("messages");

    chatButton.addEventListener("click", () => {
        chatBox.style.display = "flex";
    });

    closeChat.addEventListener("click", () => {
        chatBox.style.display = "none";
    });

    window.userChoice = function (choice) {
        const userMessage = document.createElement("div");
        userMessage.textContent = "Tú: " + choice;
        messages.appendChild(userMessage);

        const responseMessage = document.createElement("div");
        responseMessage.textContent = "PARKINGNOW: " + getResponse(choice);
        messages.appendChild(responseMessage);

        messages.scrollTop = messages.scrollHeight;
    }

    function getResponse(choice) {
        switch (choice) {
            case "Disponibilidad de estacionamientos":
                return "Puedes encontrar estacionamientos disponibles en Lima, Arequipa, y Cusco.";
            case "reservation":
                return "Para reservar un espacio, selecciona la ciudad y elige un estacionamiento disponible.";
            case "Rutas óptimas para el estacionamiento":
                return "Te proporcionamos las rutas más óptimas basadas en tu ubicación actual.";
            default:
                return "Lo siento, no entendí tu elección.";
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPromotions, handleError);
    } else {
        console.error("La geolocalización no es soportada por este navegador.");
    }
});

function showPromotions(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(`api/getPromotions?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
            const promotionsContainer = document.getElementById('promotionsContainer');
            promotionsContainer.innerHTML = '';
            data.promotions.forEach(promotion => {
                const promoElement = document.createElement('div');
                promoElement.classList.add('promotion');
                promoElement.innerHTML = `
                    <h3>${promotion.title}</h3>
                    <p>${promotion.description}</p>
                    <span>Descuento: ${promotion.discount}%</span>
                `;
                promotionsContainer.appendChild(promoElement);
            });
        })
        .catch(error => console.error('Error fetching promotions:', error));
}

function handleError(error) {
    console.error('Error obtaining location:', error);
}
    document.getElementById("chatButton").addEventListener("click", function() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = "block";
    chatBox.style.transform = "translateY(0)";
    chatBox.style.opacity = "1";
});

    document.getElementById("closeChat").addEventListener("click", function() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.transform = "translateY(20px)";
    chatBox.style.opacity = "0";
    setTimeout(function() {
    chatBox.style.display = "none";
}, 300);
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

    function toggleMenu() {
        var menu = document.getElementById('mobile-menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }

        document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Evita que el enlace recargue la página
            e.preventDefault();


            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 1,
                    behavior: 'smooth'
                });
            }
        });
    });
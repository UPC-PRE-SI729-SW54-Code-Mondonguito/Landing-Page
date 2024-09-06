function showNotification() {
    const notification = document.querySelector('.notification');
    notification.classList.add('show');

    // Ocultar la notificación después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}


showNotification();


function showNotificationIcon() {
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.classList.add('active');
}

// Llama a showNotificationIcon() cuando llegue una nueva notificación
showNotificationIcon();


function showNotificationChange() {
    const notificationChange = document.querySelector('#notificationChange');
    notificationChange.classList.add('show');

    // Ocultar la notificación después de 5 segundos
    setTimeout(() => {
        notificationChange.classList.remove('show');
    }, 5000);
}

// Llama a showNotificationChange() para mostrar la notificación
showNotificationChange();

function showNotificationCancel() {
    const notificationCancel = document.querySelector('#notificationCancel');

    // Mostrar la notificación después de 10 segundos
    setTimeout(() => {
        notificationCancel.classList.add('show');

        // Ocultar la notificación después de otros 10 segundos
        setTimeout(() => {
            notificationCancel.classList.remove('show');
        }, 10000); // 10 segundos de visibilidad
    }, 10000); // 10 segundos antes de aparecer
}

// Llama a showNotificationCancel() para mostrar la notificación
showNotificationCancel();


// Llama a showNotificationCancel() para mostrar la notificación
showNotificationCancel();

function showSecurityAlert() {
    const securityAlert = document.getElementById('securityAlert');
    securityAlert.classList.add('show');

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        securityAlert.classList.remove('show');
    }, 5000);
}

document.querySelectorAll('.security-check-button').forEach(button => {
    button.addEventListener('click', function() {
        const parkingName = button.getAttribute('data-parking');

        // Simular verificación de seguridad
        const securityIssueDetected = Math.random() > 0.7; // Simular un 30% de probabilidad de problema

        if (securityIssueDetected) {
            showSecurityAlert(); // Mostrar la alerta si se detecta un problema
        } else {
            alert(`La seguridad del ${parkingName} ha sido verificada. No se detectaron problemas.`);
        }
    });
});

function showSecurityAlert() {
    const securityAlert = document.getElementById('securityAlert');
    securityAlert.classList.add('show');

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        securityAlert.classList.remove('show');
    }, 5000);
}

function toggleTrackingAlarmSection() {
    const section = document.getElementById('tracking-alarm-section');
    section.classList.toggle('hidden');
}

document.querySelectorAll('.security-check-button').forEach(button => {
    button.addEventListener('click', function() {
        const parkingName = button.getAttribute('data-parking');

        // Simular verificación de seguridad
        const securityIssueDetected = Math.random() > 0.7; // Simular un 30% de probabilidad de problema

        if (securityIssueDetected) {
            showSecurityAlert(); // Mostrar la alerta si se detecta un problema
        } else {
            alert(`La seguridad del ${parkingName} ha sido verificada. No se detectaron problemas.`);
        }
    });
});

document.getElementById('tracking-alarm-button').addEventListener('click', function() {
    toggleTrackingAlarmSection(); // Alterna la visibilidad de la sección
});

function showNotification() {
    const notification = document.querySelector('.notification');
    notification.classList.add('show');

    // Ocultar la notificación después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

function showNotificationIcon() {
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.classList.add('active');
}

// Llama a showNotificationIcon() cuando llegue una nueva notificación
showNotificationIcon();

function showNotificationChange() {
    const notificationChange = document.querySelector('#notificationChange');
    notificationChange.classList.add('show');

    // Ocultar la notificación después de 5 segundos
    setTimeout(() => {
        notificationChange.classList.remove('show');
    }, 5000);
}

// Llama a showNotificationChange() para mostrar la notificación
showNotificationChange();

function showNotificationCancel() {
    const notificationCancel = document.querySelector('#notificationCancel');

    // Mostrar la notificación después de 10 segundos
    setTimeout(() => {
        notificationCancel.classList.add('show');

        // Ocultar la notificación después de otros 10 segundos
        setTimeout(() => {
            notificationCancel.classList.remove('show');
        }, 10000); // 10 segundos de visibilidad
    }, 10000); // 10 segundos antes de aparecer
}

// Llama a showNotificationCancel() para mostrar la notificación
showNotificationCancel();

function showSecurityAlert() {
    const securityAlert = document.getElementById('securityAlert');
    securityAlert.classList.add('show');

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        securityAlert.classList.remove('show');
    }, 5000);
}

document.querySelectorAll('.security-check-button').forEach(button => {
    button.addEventListener('click', function() {
        const parkingName = button.getAttribute('data-parking');

        // Simular verificación de seguridad
        const securityIssueDetected = Math.random() > 0.7; // Simular un 30% de probabilidad de problema

        if (securityIssueDetected) {
            showSecurityAlert(); // Mostrar la alerta si se detecta un problema
        } else {
            alert(`La seguridad del ${parkingName} ha sido verificada. No se detectaron problemas.`);
        }
    });
});

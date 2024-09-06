function showNotification() {
    const notification = document.querySelector('.notification');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}


showNotification();


function showNotificationIcon() {
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.classList.add('active');
}

showNotificationIcon();


function showNotificationChange() {
    const notificationChange = document.querySelector('#notificationChange');
    notificationChange.classList.add('show');

    setTimeout(() => {
        notificationChange.classList.remove('show');
    }, 5000);
}

showNotificationChange();

function showNotificationCancel() {
    const notificationCancel = document.querySelector('#notificationCancel');
    setTimeout(() => {
        notificationCancel.classList.add('show');
        setTimeout(() => {
            notificationCancel.classList.remove('show');
        }, 10000);
    }, 10000);
}

showNotificationCancel();

function showSecurityAlert() {
    const securityAlert = document.getElementById('securityAlert');
    securityAlert.classList.add('show');


    setTimeout(() => {
        securityAlert.classList.remove('show');
    }, 5000);
}

document.querySelectorAll('.security-check-button').forEach(button => {
    button.addEventListener('click', function() {
        const parkingName = button.getAttribute('data-parking');


        const securityIssueDetected = Math.random() > 0.7;

        if (securityIssueDetected) {
            showSecurityAlert();
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


        const securityIssueDetected = Math.random() > 0.7;

        if (securityIssueDetected) {
            showSecurityAlert();
        } else {
            alert(`La seguridad del ${parkingName} ha sido verificada. No se detectaron problemas.`);
        }
    });
});

document.getElementById('tracking-alarm-button').addEventListener('click', function() {
    toggleTrackingAlarmSection();
});

function showNotification() {
    const notification = document.querySelector('.notification');
    notification.classList.add('show');


    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

function showNotificationIcon() {
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.classList.add('active');
}


showNotificationIcon();

function showNotificationChange() {
    const notificationChange = document.querySelector('#notificationChange');
    notificationChange.classList.add('show');


    setTimeout(() => {
        notificationChange.classList.remove('show');
    }, 5000);
}


showNotificationChange();

function showNotificationCancel() {
    const notificationCancel = document.querySelector('#notificationCancel');

    setTimeout(() => {
        notificationCancel.classList.add('show');


        setTimeout(() => {
            notificationCancel.classList.remove('show');
        }, 10000);
    }, 10000);
}

showNotificationCancel();

function showSecurityAlert() {
    const securityAlert = document.getElementById('securityAlert');
    securityAlert.classList.add('show');


    setTimeout(() => {
        securityAlert.classList.remove('show');
    }, 5000);
}

document.querySelectorAll('.security-check-button').forEach(button => {
    button.addEventListener('click', function() {
        const parkingName = button.getAttribute('data-parking');


        const securityIssueDetected = Math.random() > 0.7;

        if (securityIssueDetected) {
            showSecurityAlert();
        } else {
            alert(`La seguridad del ${parkingName} ha sido verificada. No se detectaron problemas.`);
        }
    });
});

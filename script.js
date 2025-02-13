let noButtonClicks = 0;

// Función para manejar el clic en el botón "NO"
document.getElementById('noButton').addEventListener('click', function () {
    noButtonClicks++;

    if (noButtonClicks < 3) {
        // Reducir el tamaño del botón "NO"
        const scale = 1 - (noButtonClicks * 0.1);
        this.style.transform = `scale(${scale})`;

        // Aumentar el tamaño del botón "Sí"
        const yesButton = document.getElementById('yesButton');
        const yesScale = 1 + (noButtonClicks * 0.2);
        yesButton.style.transform = `scale(${yesScale})`;

        // Mover el botón "NO" hacia la derecha
        const moveDistance = noButtonClicks * 20;
        this.style.marginLeft = `${moveDistance}px`;

        // Cambiar el texto del botón "Sí"
        if (noButtonClicks === 1) {
            yesButton.textContent = 'SÍ MAMOR';
        } else if (noButtonClicks === 2) {
            yesButton.textContent = 'SÍ';
        }
    } else {
        // Ocultar elementos iniciales
        hideInitialElements();

        // Mostrar imagen y mensaje de enojo
        showElement('angryImage');
        showElement('angryMessage');

        // Mostrar el botón "OK"
        setTimeout(() => {
            showElement('okButton');
        }, 200);
    }
});

// Función para manejar el clic en el botón "Sí"
document.getElementById('yesButton').addEventListener('click', function () {
    // Ocultar elementos iniciales
    hideInitialElements();

    // Mostrar diferentes mensajes según el texto del botón
    if (this.textContent === 'CLARO QUE SÍ MAMOR') {
        showElement('loveImage');
        showElement('loveMessage');
    } else if (this.textContent === 'SÍ MAMOR') {
        showElement('secondOptionImage');
        showElement('secondOptionMessage');
    } else if (this.textContent === 'SÍ') {
        showElement('doubtImage');
        showElement('doubtMessage');
    }
});

// Función para manejar el clic en el botón "OK"
document.getElementById('okButton').addEventListener('click', function () {
    // Ocultar elementos de enojo
    hideElement('angryImage');
    hideElement('angryMessage');
    hideElement('okButton');

    // Mostrar imagen y mensaje final
    showElement('finalImage');
    showElement('finalMessage');

    // Cerrar la ventana después de 7 segundos
    setTimeout(() => {
        window.close();
    }, 7000);
});

// Funciones auxiliares para mostrar y ocultar elementos
function hideInitialElements() {
    hideElement('mainImage');
    hideElement('message');
    hideElement('yesButton');
    hideElement('noButton');
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).style.display = "block";  // Asegura que sea visible
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
    document.getElementById(id).style.display = "none";  // Lo oculta completamente
}

let noButtonClicks = 0;

document.getElementById('noButton').addEventListener('click', function() {
    noButtonClicks++;
    if (noButtonClicks < 3) {
        // Reducir el tamaño del botón "NO"
        const scale = 1 - (noButtonClicks * 0.1);
        this.style.transform = `scale(${scale})`;

        // Aumentar el tamaño del botón "Claro que sí mamor"
        const yesButton = document.getElementById('yesButton');
        const yesScale = 1 + (noButtonClicks * 0.2);
        yesButton.style.transform = `scale(${yesScale})`;

        // Mover el botón "NO" hacia la derecha
        const moveDistance = noButtonClicks * 20;
        this.style.marginLeft = `${moveDistance}px`;

        // Cambiar el texto del botón "Claro que sí mamor"
        if (noButtonClicks === 1) {
            yesButton.textContent = 'SÍ MAMOR';
        } else if (noButtonClicks === 2) {
            yesButton.textContent = 'SÍ';
        }
    } else {
        // Ocultar imagen y mensaje iniciales
        document.getElementById('mainImage').style.display = 'none';
        document.getElementById('message').style.display = 'none';

        // Ocultar botones iniciales
        this.style.display = 'none';
        document.getElementById('yesButton').style.display = 'none';

        // Mostrar imagen y mensaje de enojo
        document.getElementById('angryImage').style.display = 'block';
        document.getElementById('angryMessage').style.display = 'block';

        // Mostrar el botón "OK"
        document.getElementById('okButton').style.display = 'block';
    }
});

// Función para manejar el clic en el botón "Sí"
document.getElementById('yesButton').addEventListener('click', function() {
    // Si es la primera vez que se hace clic en "Claro que sí mamor"
    if (this.textContent === 'CLARO QUE SÍ MAMOR') {
        // Ocultar la imagen y el mensaje inicial
        document.getElementById('mainImage').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        
        // Ocultar los botones
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';

        // Mostrar la imagen de amor y el mensaje
        document.getElementById('loveImage').style.display = 'block';
        document.getElementById('loveMessage').style.display = 'block';
    }
    // Si el botón dice "Sí mamor"
    else if (this.textContent === 'SÍ MAMOR') {
        // Ocultar la imagen y el mensaje inicial
        document.getElementById('mainImage').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        
        // Ocultar los botones
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';

        // Mostrar la imagen de segunda opción y el mensaje
        document.getElementById('secondOptionImage').style.display = 'block';
        document.getElementById('secondOptionMessage').style.display = 'block';
    }
    // Si el botón dice "Sí"
    else if (this.textContent === 'SÍ') {
        // Ocultar la imagen y el mensaje inicial
        document.getElementById('mainImage').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        
        // Ocultar los botones
        document.getElementById('yesButton').style.display = 'none';
        document.getElementById('noButton').style.display = 'none';

        // Mostrar la imagen de duda y el mensaje
        document.getElementById('doubtImage').style.display = 'block';
        document.getElementById('doubtMessage').style.display = 'block';
    }
});

// Botón OK para mostrar imagen final
document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('angryImage').style.display = 'none';
    document.getElementById('angryMessage').style.display = 'none';
    this.style.display = 'none';

    document.getElementById('finalImage').style.display = 'block';
    document.getElementById('finalMessage').style.display = 'block';

    setTimeout(() => {
        window.close();
    }, 7000);
});

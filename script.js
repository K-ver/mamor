let noButtonClicks = 0;

document.getElementById('noButton').addEventListener('click', function() {
    noButtonClicks++;
    if (noButtonClicks < 3) {
        // Reducir el tamaño del botón "NO"
        const scale = 1 - (noButtonClicks * 0.1); // Reduce un 10% cada clic
        this.style.transform = `scale(${scale})`;
        
        // Aumentar el tamaño del botón "Claro que sí mamor"
        const yesButton = document.getElementById('yesButton');
        const yesScale = 1 + (noButtonClicks * 0.2); // Aumenta un 20% cada clic
        yesButton.style.transform = `scale(${yesScale})`;
        
        // Mover el botón "NO" hacia la derecha
        const moveDistance = noButtonClicks * 20; // Mueve 20px hacia la derecha cada clic
        this.style.marginLeft = `${moveDistance}px`;

        // Cambiar el texto del botón "Claro que sí mamor" a "Sí mamor" después del primer clic
        if (noButtonClicks === 1) {
            yesButton.textContent = 'Sí mamor';
        }
        // Cambiar el texto del botón "Sí mamor" a "Sí" después del segundo clic
        else if (noButtonClicks === 2) {
            yesButton.textContent = 'Sí';
        }
    } else {
        // Cambiar la imagen y el mensaje después de 3 clics
        document.getElementById('mainImage').src = 'imagen2.jpg';
        document.getElementById('message').textContent = '¿POR QUÉ SIGUES DICIENDO NO?';
        this.style.display = 'none'; // Ocultar el botón "NO"

        // Cambiar el texto del botón "Sí" a "OK"
        const yesButton = document.getElementById('yesButton');
        yesButton.textContent = 'OK';

        // Cambiar el comportamiento del botón "OK" para mostrar la imagen final y cerrar la página
        yesButton.addEventListener('click', function() {
            // Ocultar la imagen y el mensaje inicial
            document.getElementById('mainImage').style.display = 'none';
            document.getElementById('message').style.display = 'none';
            
            // Ocultar los botones
            yesButton.style.display = 'none';

            // Mostrar la imagen final y el mensaje
            document.getElementById('finalImage').style.display = 'block';
            document.getElementById('finalMessage').style.display = 'block';

            // Cerrar la página después de 10 segundos
            setTimeout(() => {
                window.close(); // Cierra la pestaña actual
            }, 10000); // 10000 milisegundos = 10 segundos
        });
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    // Si es la primera vez que se hace clic en "Claro que sí mamor"
    if (this.textContent === 'Claro que sí mamor') {
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
    else if (this.textContent === 'Sí mamor') {
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
    else if (this.textContent === 'Sí') {
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
    // Si el botón dice "OK"
    else if (this.textContent === 'OK') {
        // Ocultar la imagen y el mensaje inicial
        document.getElementById('mainImage').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        
        // Ocultar los botones
        document.getElementById('yesButton').style.display = 'none';

        // Mostrar la imagen final y el mensaje
        document.getElementById('finalImage').style.display = 'block';
        document.getElementById('finalMessage').style.display = 'block';

        // Cerrar la página después de 10 segundos
        setTimeout(() => {
            window.close(); // Cierra la pestaña actual
        }, 10000); // 10000 milisegundos = 10 segundos
    }
});
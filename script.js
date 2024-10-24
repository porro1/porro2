document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const typeSound = document.getElementById('typeSound');
    const alertSound = document.getElementById('alertSound');
    const errorSound = document.getElementById('errorSound');
    const colombiaImage = document.getElementById('colombiaImage');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');
    const closeModal = document.getElementById('closeModal');

    const alerts = [
        "INICIO DE SESIÓN: Usuario Juanjo detectado...\n",
        "¡ADVERTENCIA! Su dispositivo ha sido comprometido.\n",
        "ALERTA: Acceso no autorizado detectado en la red.\n",
        "Riesgo de ransomware inminente. Actúe con rapidez.\n",
        "Escaneo de vulnerabilidades en curso...\n",
        "Fugas de datos detectadas en su cuenta.\n",
        "¡Cierre sesión inmediatamente!\n",
        "Sistema en riesgo: actualice su antivirus.\n",
        "Actividad sospechosa en su cuenta.\n",
        "Protocolo de seguridad violado.\n",
        "ADVERTENCIA: posible spyware instalado.\n",
        "Conexión remota detectada. Desconéctese ahora.\n",
        "¡Sus datos están siendo robados!\n",
        "ALERTA: phishing detectado en su correo.\n",
        "Ciberataque en curso. ¡Responda rápido!\n",
        "Sistema en peligro: correcciones urgentes necesarias.\n",
        "Vulnerabilidad crítica detectada. ¡Actúe ya!\n",
        "¡Intrusión detectada! Cambie su contraseña ya.\n",
        "Conexión insegura. ¡Desconéctese inmediatamente!\n",
        "Peligro: su privacidad está en juego.\n",
        "ERROR: Acceso no autorizado. Terminando sesión...\n"
    ];

    function typeMessage(message, callback) {
        let index = 0;

        function type() {
            if (index < message.length) {
                output.textContent += message[index++];
                typeSound.play();
                output.scrollTop = output.scrollHeight; // Desplazar hacia abajo
                setTimeout(type, 50); // Velocidad de escritura
            } else {
                callback();
            }
        }

        type();
    }

    let messageIndex = 0;
    function showAlert() {
        if (messageIndex < alerts.length) {
            typeMessage(alerts[messageIndex], () => {
                messageIndex++;
                output.textContent += "\n"; // Salto de línea
                if (Math.random() < 0.3) {
                    output.textContent += "ERROR: Comando no reconocido.\n"; // Mensaje de error aleatorio
                    errorSound.play();
                }
                alertSound.play();
                setTimeout(showAlert, 1000); // Espera antes del siguiente mensaje
            });
        } else {
            // Reiniciar los mensajes después de 2 segundos
            messageIndex = 0;
            setTimeout(showAlert, 2000);
        }
    }

    // Comenzar a mostrar mensajes inmediatamente
    showAlert();

    // Mostrar información de procedencia y el modal después de 6 segundos
    setTimeout(() => {
        const procedenciaMessage = 
            "PROCEDENCIA DETECTADA: País - Colombia...\n" +
            "----------------------------------------------\n" +
            "Nombre: Juan Pérez\n" +
            "Edad: 30 años\n" +
            "Tipo de identificación: Cédula de ciudadanía\n" +
            "ID: 123456789\n" +
            "Dirección: Calle 123, Bogotá, Colombia\n" +
            "Teléfono: +57 300 123 4567\n" +
            "Actividad reciente: Conexiones sospechosas, intentos de acceso no autorizado.\n" +
            "Última conexión: 23 de octubre de 2024, 14:30.\n\n" +
            "Residencia: Sector La Candelaria, Bogotá.\n" +
            "----------------------------------------------\n";

        colombiaImage.classList.remove('hidden');
        modalText.textContent = procedenciaMessage;
        modal.classList.remove('hidden'); // Mostrar el modal
    }, 6000); // 6000 ms = 6 segundos

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

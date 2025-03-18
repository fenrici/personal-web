document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío hasta validar

        let errores = []; // Array para almacenar errores

        // Obtener valores
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let dni = document.getElementById("dni").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        // Regex
        let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/; // Solo letras, mínimo 2 caracteres
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email válido
        let regexTelefono = /^[0-9]{7,15}$/; // Teléfono entre 7 y 15 dígitos
        let regexDNI = /^[0-9]{8}[A-Za-z]$/; // Formato DNI español

        // Validaciones
        if (!regexNombre.test(nombre)) {
            errores.push("❌ Nombre inválido (mín. 2 letras)");
        }

        if (!regexEmail.test(email)) {
            errores.push("❌ Email inválido");
        }

        if (!regexTelefono.test(telefono)) {
            errores.push("❌ Teléfono inválido (solo números, 7-15 dígitos)");
        }

        if (!regexDNI.test(dni)) {
            errores.push("❌ DNI inválido (Ej: 12345678A)");
        }

        if (mensaje.length < 5) {
            errores.push("❌ Mensaje demasiado corto (mínimo 5 caracteres)");
        }

        // Mostrar errores o éxito
        if (errores.length > 0) {
            alert("⚠️ Por favor, corrige los siguientes errores antes de enviar:\n\n" + errores.join("\n"));
        } else {
            alert("✅ Formulario enviado correctamente.");
            this.submit(); // Enviar formulario si todo está bien
        }
    });
});

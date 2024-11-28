// Función para validar el formulario
function validarFormulario(event) {

    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const motivo = document.getElementById('motivo');

    // Variable de datos
    let esValido = true;

    
    if (nombre.value.trim() === '') {
        alert('El nombre es obligatorio');
        esValido = false;
    }

    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (correo.value.trim() === '') {
        alert('El correo es obligatorio');
        esValido = false;
    } else if (!regexCorreo.test(correo.value)) {
        alert('Por favor ingrese un correo válido');
        esValido = false;
    }

    if (motivo.value.trim() === '') {
        alert('El motivo de contacto es obligatorio');
        esValido = false;
    }

    if (esValido) {
        alert('Formulario enviado con éxito');
        document.getElementById('formulario-contacto').submit();
    }
}

// Asignar el evento de envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', validarFormulario);

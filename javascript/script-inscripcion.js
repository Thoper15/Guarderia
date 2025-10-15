const button = document.getElementById('botonform')
const cerrarModal = document.getElementById('cerrarModal')
const modal = document.getElementById('modal-inscripcion')
const nombreNiño = document.getElementById('nombre-niño')
const apellidoNiño = document.getElementById('apellido-niño')
const nacimiento = document.getElementById('nacimiento')
const nombreTutor = document.getElementById('nombre-tutor')
const apellidoTutor = document.getElementById('apellido-tutor')
const parentescoTutor = document.getElementById('parentesco-tutor')
const numeroTutor = document.getElementById('celular')
const direccionTutor = document.getElementById('direccion-tutor')
const correoTutor = document.getElementById('correo-tutor')
const planes = document.getElementById('select-planes')

nacimiento.addEventListener('change', () => {
    actualizarPlan()
})

button.addEventListener("click", () => {
    modal.style.display = "flex"
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"
    const nombreNiñoValor = nombreNiño.value.trim()
    const apellidoNiñoValor = apellidoNiño.value.trim()
    const nombreTutorValor = nombreTutor.value.trim()
    const apellidoTutorValor = apellidoTutor.value.trim()
    const parentescoTutorValor = parentescoTutor.value.trim()
    const direccionTutorValor = direccionTutor.value.trim()
    const correoTutorValor = correoTutor.value.trim()
    const fechaNacimiento = nacimiento.value
    const numeroTutorValor = numeroTutor.value.trim()
    const edadvalida = document.getElementById('plan').textContent.trim()

    if (nombreNiñoValor === "" || apellidoNiñoValor === "") {
        document.getElementById('sms').innerHTML = "Por favor complete los datos del niñ@"
    } else if (!fechaNacimiento) {
        document.getElementById('sms').innerHTML = 'Por favor seleccione una fecha de nacimiento'
    }
    else if (verifGenero() === false) {
        document.getElementById('sms').innerHTML = 'Por favor seleccione el género'

    } else if (nombreTutorValor === "" || apellidoTutorValor === "" || parentescoTutorValor === "" || direccionTutorValor === "") {
        document.getElementById('sms').innerHTML = "Por favor complete los datos del Padre/Madre/Tutor"

    } else if (validarNumero(numeroTutorValor) === false) {
        document.getElementById('sms').innerHTML = "Por favor verifique el número de celular"

    } else if (correoTutorValor.indexOf("@gmail.com") < 0) {
        document.getElementById('sms').innerHTML = 'Por favor ingrese un correo válido'
    }
    else if (edadvalida === "No disponible") {
        document.getElementById('sms').innerHTML = 'Edad fuera de rango'
        document.querySelector("form").reset()

        document.getElementById('plan').innerHTML = "Planes"
        document.getElementById('content-plan').innerHTML = ""
    }
    else {
        document.getElementById('sms').innerHTML = "Se registro exitosamente"
        document.querySelector("form").reset()

        document.getElementById('plan').innerHTML = "Planes"
        document.getElementById('content-plan').innerHTML = ""
    }

})

cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
})

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = ""
        document.body.style.paddingRight = ""

    }
})


function validarCorreo() {
    let correo = correoTutor.value.trim()

    if (correo.IndexOf("@gmail.com") < 0) {
        return false
    } else {
        return true
    }

}
function verifGenero() {
    let genero = document.querySelector('input[name="genero"]:checked')
    if (!genero) {
        return false
    } else {
        return true
    }
}
function validarNumero(numeroSelect) {
    let numero = numeroSelect.trim()

    if (numero.length !== 8 || isNaN(numero)) {
        return false
    } else {
        return true
    }

}

//Calcular la edad
function calcularEdad() {
    const fechaNacimiento = nacimiento.value
    const fechaNacido = new Date(fechaNacimiento)
    const hoy = new Date()

    let edad = hoy.getFullYear() - fechaNacido.getFullYear()
    const mesActual = hoy.getMonth()
    const mesNacimiento = fechaNacido.getMonth()
    //vrificar si ya cumplio años
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
        edad--
    }
    return edad
}


//Asignar plan

function actualizarPlan() {
    let edad = calcularEdad()

    if (edad >= 0 && edad < 1) {
        document.getElementById('plan').innerHTML = "Plan Cuna"
        document.getElementById('content-plan').innerHTML = "De 0 a 1 año"
    } else if (edad >= 1 && edad < 3) {
        document.getElementById('plan').innerHTML = "Plan Maternal"
        document.getElementById('content-plan').innerHTML = "De 1 a 3 años"
    } else if (edad >= 3 && edad < 4) {
        document.getElementById('content-plan').innerHTML = "De 3 a 4 años"
        document.getElementById('plan').innerHTML = "Plan Prekinder"
    } else if (edad >= 4 && edad <= 5) {
        document.getElementById('content-plan').innerHTML = "De 4 a 5 años"
        document.getElementById('plan').innerHTML = "Plan Kinder"
    } else {
        document.getElementById('content-plan').innerHTML = "Edad fuera del rango"
        document.getElementById('plan').innerHTML = "No disponible"
    }
}












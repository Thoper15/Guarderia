const button = document.getElementById('button-comentario')
const cerrarModal = document.getElementById('cerrarModal')
const modal = document.getElementById('modal')
const nombre = document.getElementById('nombre-comentario')
const comentario = document.getElementById('comentario')

button.addEventListener("click", () => {
    modal.style.display = "flex"
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"
    const nombreValor = nombre.value.trim()
    const comentarioValor = comentario.value.trim()
    if (nombreValor === "" || comentarioValor === "") {
        document.getElementById('sms').innerHTML = "por favor complete su comentario"
    } else {
        document.getElementById('sms').innerHTML = "¡Gracias por comentar!"
    }
    document.querySelector("form").reset()
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

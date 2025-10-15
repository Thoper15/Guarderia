const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('posterior')

let animacion = document.getElementById('galeria-instalaciones')
function cambiarImagen() {
  animacion.style.opacity = 0
  setTimeout(() => {
    animacion.src = `images/ambientes/img${x}.jpg`
    animacion.style.opacity = 1
  }, 300)
}
let x = 1
siguiente.addEventListener('click', () => {
  x == 4 ? x = 1 : x++
  cambiarImagen()
})
anterior.addEventListener('click', () => {
  x == 1 ? x = 4 : x--
  cambiarImagen()
})
// Cotizaciones 
const turno = document.getElementById("turno")
const horasContainer = document.getElementById("horasContainer")
const horasInput = document.getElementById("horas")
const sabado = document.getElementById("sabado")
const form = document.getElementById("formCotizacion")
const errorMsg = document.getElementById("errorMsg")
const resultado = document.getElementById("resultado")

const PRECIO_HORA = 10

turno.addEventListener("change", () => {
  const value = turno.value
  errorMsg.textContent = ""
  resultado.textContent = ""
  horasContainer.style.display = (value === "por_horas") ? "block" : "none"
  verificarSabado()
})

horasInput.addEventListener("input", () => {
  if (horasInput.value > 8) horasInput.value = 8
  verificarSabado()
})

function verificarSabado() {
  const value = turno.value
  const horas = Number(horasInput.value);
  if (value === "tarde" || value === "completo" || (value === "por_horas" && horas > 4)) {
    sabado.disabled = true;
    sabado.checked = false;
  } else {
    sabado.disabled = false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMsg.textContent = ""
  resultado.textContent = ""

  const edad = document.getElementById("edad").value
  const turnoSel = turno.value
  const diasSeleccionados = [...document.querySelectorAll(".dias input:checked")].length
  const horas = parseInt(horasInput.value)

  // Validaciones específicas
  if (!edad) {
    errorMsg.textContent = "Debe seleccionar la edad del niño."
    return
  }
  if (!turnoSel) {
    errorMsg.textContent = "Debe seleccionar un turno."
    return
  }
  if (diasSeleccionados === 0) {
    errorMsg.textContent = "Debe seleccionar al menos un día de asistencia."
    return
  }
  if (turnoSel === "por_horas" && (!horas || horas < 1)) {
    errorMsg.textContent = "Debe ingresar una cantidad de horas válida (1 a 8)."
    return
  }

  // Determinar horas por día según el turno
  let horasDia = 0
  switch (turnoSel) {
    case "mañana":
      horasDia = 5
      break
    case "tarde":
      horasDia = 5
      break
    case "completo":
      horasDia = 11
      break
    case "por_horas":
      horasDia = horas
      break
  }

  const totalMensual = horasDia * diasSeleccionados * 4 * PRECIO_HORA;
  resultado.textContent = `Costo mensual aproximado: ${totalMensual.toFixed(2)} Bs`
})
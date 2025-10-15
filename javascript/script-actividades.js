const buttonPrev = document.getElementById('prev')
const buttonNext = document.getElementById('next')
let x = 1
let animacion= document.getElementById('galeria')
function cambiarImagen() {
  animacion.style.opacity = 0
  setTimeout(() => {
    animacion.src = `images/actividades/actividad${x}.webp`
    animacion.style.opacity = 1
  }, 300)
}
buttonNext.addEventListener('click',() => {
    x==4? x=1 : x++
    cambiarImagen() 
})
buttonPrev.addEventListener('click',() => {
    x==1? x=4 : x--
    cambiarImagen()
})

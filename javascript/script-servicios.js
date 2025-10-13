const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('posterior')

let animacion= document.getElementById('galeria-instalaciones')
function cambiarImagen() {
  animacion.style.opacity = 0
  setTimeout(() => {
    animacion.src = `images/ambientes/img${x}.jpg`
    animacion.style.opacity = 1
  }, 300)
}
let x = 1
siguiente.addEventListener('click',() => {
    x==4? x=1 : x++
    cambiarImagen() 
})
anterior.addEventListener('click',() => {
    x==1? x=4 : x--
    cambiarImagen()
})
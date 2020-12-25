// Variables
const header = document.getElementById('header')
const puntuacion1 = header.children.puntuacion1
const puntuacion2 = header.children.puntuacion2
const winner = header.children.winner
const canvas = document.getElementById('game')
const lienzo = canvas.getContext('2d')
const raquetaUno = new Raqueta(1, 10, lienzo)
const raquetaTwo = new Raqueta(2, 382, lienzo)
let heigth = canvas.height
let width = canvas.width
let widthPelota = (width / 2 ) - 5
let heightPelota = (heigth / 2) - 5
let R1ejeY = (heigth / 2) - 30
let R2ejeY = R1ejeY
const pelota = new Pelota(lienzo, '#0f0', puntuacion1, puntuacion2, winner)

raquetaUno.dibujarRaqueta(R1ejeY)
raquetaTwo.dibujarRaqueta(R2ejeY)
pelota.dibujarPelota(widthPelota, heightPelota)

let direccion = pelota.moverPelota(pelota, 'sum')
if(direccion) {
    let direction = pelota.moverPelota(pelota, 'rest')
}
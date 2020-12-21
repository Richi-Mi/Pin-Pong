// Variables
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
const pelota = new Pelota(lienzo, '#0f0')

raquetaUno.dibujarRaqueta(R1ejeY)
raquetaTwo.dibujarRaqueta(R2ejeY)
pelota.dibujarPelota(widthPelota, heightPelota)

setInterval(() => {
    if(widthPelota < 0 && widthPelota >= width) {
        widthPelota = widthPelota - 10
        pelota.dibujarPelota(widthPelota, heightPelota)
    } else {
        widthPelota = widthPelota + 10
        pelota.dibujarPelota(widthPelota, heightPelota)
    }
}, 50);
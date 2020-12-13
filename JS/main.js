const canvas = document.getElementById('game')
const lienzo = canvas.getContext('2d')
const raquetaUno = new Raqueta(1, 10)
const heigth = canvas.height
raquetaUno.dibujarRaqueta(lienzo, heigth)
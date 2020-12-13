class Pelota{
    dibujarPelota(lienzo, xi, yi, xf, yf, color) {
        lienzo.beginPath()
        lienzo.strokeStyle = color
        lienzo.moveTo(xi, yi)
        lienzo.lineTo(xf, yf)
        lienzo.stroke()
        lienzo.closePath()
    }
}
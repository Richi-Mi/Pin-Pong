class Pelota{
    constructor(lienzo, color) {
        this.lienzo = lienzo
        this.xt = 9
        this.yt = 10
        this.color = color
    }
    dibujarPelota(xf, yf) {
        this.lienzo.fillStyle = this.color
        let moveX = xf
        let moveY = yf
        this.lienzo.fillRect(moveX, moveY, this.xt, this.yt)
    }
}
// this.lienzo.beginPath()
// this.lienzo.strokeStyle = color
// this.lienzo.moveTo(xi, yi)
// this.lienzo.lineTo(xf, yf)
// this.lienzo.stroke()
// this.lienzo.closePath()
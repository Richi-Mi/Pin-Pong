class Raqueta {
    constructor(jugador, largo, lienzo) {
        this.jugador = jugador
        this.largo = largo
        this.lienzo = lienzo
    }
    dibujarRaqueta(heigth) {
        this.lienzo.fillStyle = "#fff"
        this.lienzo.fillRect(this.largo, heigth, 8, 20)
    }
    repaintRaqueta(height) {
        this.lienzo.clearRect(this.largo - 1, height - 1, 12, 24)
    }
}
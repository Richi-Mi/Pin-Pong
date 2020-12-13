class Raqueta {
    constructor(jugador, largo) {
        this.jugador = jugador
        this.largo = largo
    }
    dibujarRaqueta(lienzo, heigth) {
        let ejeY = (heigth / 2) - 30
        lienzo.fillStyle = "#fff"
        lienzo.fillRect(this.largo, ejeY, 8, 20)
        console.log(ejeY)
    }
    moveY(ejeY) {
    }

}
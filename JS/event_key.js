document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            raquetaUno.repaintRaqueta(R1ejeY)
            R1ejeY = R1ejeY - 10
            raquetaUno.dibujarRaqueta(R1ejeY)
        break;
        case 's':
            raquetaUno.repaintRaqueta(R1ejeY)
            R1ejeY = R1ejeY + 10
            raquetaUno.dibujarRaqueta(R1ejeY)
        break;
        case "ArrowUp":
            raquetaTwo.repaintRaqueta(R2ejeY)
            R2ejeY = R2ejeY - 10
            raquetaTwo.dibujarRaqueta(R2ejeY)
        break;
        case "ArrowDown":
            raquetaTwo.repaintRaqueta(R2ejeY)
            R2ejeY = R2ejeY + 10
            raquetaTwo.dibujarRaqueta(R2ejeY)
        break;
        default:
        break;
    }
})
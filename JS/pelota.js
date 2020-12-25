class Pelota{
    constructor(lienzo, color, puntuacion1, puntuacion2, banner) {
        this.lienzo = lienzo
        this.xt = 9
        this.yt = 10
        this.color = color
        this.puntuacion1 = puntuacion1
        this.puntuacion2 = puntuacion2
        this.banner = banner
    }
    dibujarPelota(xf, yf) {
        this.lienzo.fillStyle = this.color
        let moveX = xf
        let moveY = yf
        this.lienzo.fillRect(moveX, moveY, this.xt, this.yt)
    }
    clearPelota(moveX, moveY) {
        this.lienzo.clearRect(moveX - 1, moveY - 1, this.xt + 3, this.yt + 3)
    } 
    getState(width, widthCanvas) {
        if(width < 0) {
            this.puntuacion2.textContent = '1'
            return false
        }
        if(width >= widthCanvas) {
            this.puntuacion1.textContent = '1'
            return false
        } 
        else {
            return true
        }
    }
    moverPelota(pelota, sign) {
        const intervalo = setInterval(() => {
            pelota.clearPelota(widthPelota, heightPelota)
            let state = pelota.getState(widthPelota, width)
            if(state) {
                if(sign == 'sum') widthPelota = widthPelota + 10
                if(sign == 'rest') widthPelota = widthPelota - 10
                pelota.dibujarPelota(widthPelota, heightPelota)
            }
            if(!state) {
                clearInterval(intervalo)
                if(sign == 'sum') return false
                if(sign == 'rest') return true
            }
        }, 1150);
    }
}
// this.lienzo.beginPath()
// this.lienzo.strokeStyle = color
// this.lienzo.moveTo(xi, yi)
// this.lienzo.lineTo(xf, yf)
// this.lienzo.stroke()
// this.lienzo.closePath()
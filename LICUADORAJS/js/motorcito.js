var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrrBee();
        licuadora.classList.add("active");
        /*         console.log("me prendiste") */
    } else {
        estadoLicuadora = "apagada"
        hacerBrrBee();
        licuadora.classList.remove("active");
        /*         console.log("me apagaste"); */
    }
}

function hacerBrrBee() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
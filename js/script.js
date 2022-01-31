
let mensajeCopiado = ""
let mensajeDesencriptado = ""

var encriptar = document.querySelector("#btn-encriptar")

encriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var mensajeEncriptado = [];
    var input = document.querySelector(".text-input");
    var texto = input.value
    mensajeDesencriptado = texto
    var letra = ["a", "e", "i", "o", "u"]
    var letraCambio = ["ai", "enter", "imes", "ober", "ufat"]
    for (i = 0; i < texto.length; i++) {
        var letraEncontrada = false
        for (j = 0; j < letra.length; j++) {
            if (texto[i] == letra[j]) {
                mensajeEncriptado.push(letraCambio[j]);
                letraEncontrada = true
                break
            }
        }
        if (!letraEncontrada) {
            mensajeEncriptado.push(texto[i])
        }

    }

    mensajeEncriptado = mensajeEncriptado.toString();
    mensajeEncriptado = mensajeEncriptado.replace(/,/g, "")
    mensajeCopiado = mensajeEncriptado

    var input2 = document.querySelector("#msg");
    input2.value = mensajeCopiado
    input.value = ""
    mensajeEncriptado = [];

});


var copiar = document.querySelector("#btn-copy")
copiar.addEventListener("click", function () {
    copiar.textContent = mensajeCopiado;
    alert("EL mensaje encriptado " + " ' " + mensajeCopiado + " ' " + "ha sido copiado exitosamente");
    
});


var desencriptar = document.querySelector("#btn-desencriptar")

    desencriptar.addEventListener("click", function (event) {
        event.preventDefault();
        var input2 = document.querySelector("#msg");
        input2.value = mensajeDesencriptado
        
    });





















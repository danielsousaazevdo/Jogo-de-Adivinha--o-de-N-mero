let numero = Math.floor(Math.random() * 20) + 1
let tentativas = 0 

function verificar() {
    let chute = Number(document.getElementById("chute").value)
    tentativas++
    let resultado = document.getElementById("resultado")
    if (chute === numero) {
        resultado.innerText = `Parabéns, você acertou após ${tentativas} tentativas`
    } else {
        resultado.innerText = "Número errado. Tente novamente!"
    }
}
import cipher from './cipher.js';

document.getElementById("btn-Criptografar").addEventListener("click", validarC)
document.getElementById("btn-Descriptografar").addEventListener("click", validarD)

function exibirResposta() {
    document.getElementById("div-resposta").removeAttribute('hidden')
}

const cipherCode = cipher

function validarC() {
    exibirResposta()
    let elemento = document.getElementById("ipt-mensagens").value.toUpperCase();

    let resposta = document.getElementById("resposta");
    let valorEncode = cipherCode.encode(7, elemento)
    resposta.innerHTML = valorEncode

}

function validarD() {
    exibirResposta()
    let elemento = document.getElementById("ipt-mensagens").value.toUpperCase();;

    let resposta = document.getElementById("resposta");
    let valorEncode = cipherCode.decode(7, elemento)
    resposta.innerHTML = valorEncode


}
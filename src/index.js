import cipher from './cipher.js';

document.getElementById("btn-Criptografar").addEventListener("click", validar)
document.getElementById("btn-Descriptografar").addEventListener("click", validar2)
const cipherCode = cipher

function validar() {

    let elemento = document.getElementById("ipt-mensagens").value.toUpperCase();

    let resposta = document.getElementById("resposta");
    let valorEncode = cipherCode.encode(7, elemento)
    resposta.innerHTML = valorEncode

}

function validar2() {

    let elemento = document.getElementById("ipt-mensagens").value.toUpperCase();;

    let resposta = document.getElementById("resposta");
    let valorEncode = cipherCode.decode(7, elemento)
    resposta.innerHTML = valorEncode


}
import cipher from './cipher.js';

document.getElementById("btn-Criptografar").addEventListener("click", validarC);
document.getElementById("btn-Descriptografar").addEventListener("click", validarD);

const cipherCode = cipher

function validarC() {

    let valorMensagem = document.getElementById("ipt-mensagens").value.toUpperCase();
    let valorDeslocamento = document.getElementById("ipt-numero").value;
    let converterOffset = Number(valorDeslocamento);
    let resposta = document.getElementById("resposta");
    let valorEncode = cipherCode.encode(converterOffset, valorMensagem);
    resposta.innerHTML = valorEncode;

}

function validarD() {

    let valorMensagem = document.getElementById("ipt-mensagens").value.toUpperCase();
    let valorDeslocamento = document.getElementById("ipt-numero").value;
    let converterOffset = Number(valorDeslocamento);
    let resposta = document.getElementById("resposta");
    let valorEncode = cipherCode.decode(converterOffset, valorMensagem);
    resposta.innerHTML = valorEncode;


}
const cipher = {
    encode(offset, string) {
        let resultadoEncode = "";
        let quantidadeLetras = string.length
        for (let i = 0; i < quantidadeLetras; i++) {
            let valorAsc = string.charCodeAt(i)
            let codigoLetra = 65
            let valorEncode = ((valorAsc - codigoLetra + offset)) % 26 + codigoLetra;
            resultadoEncode = resultadoEncode.concat(String.fromCharCode(valorEncode));
        }

        return resultadoEncode;
    },
    decode(offset, string) {
        let resultadoDecode = "";
        let quantidadeLetras = string.length
        for (let i = 0; i < quantidadeLetras; i++) {
            let valorAsc = string.charCodeAt(i)
            let codigoLetra = 90
            let valorDecode = ((valorAsc - codigoLetra - offset) % 26) + codigoLetra;
            resultadoDecode = resultadoDecode.concat(String.fromCharCode(valorDecode));
        }

        return resultadoDecode;

    }

};

export default cipher;
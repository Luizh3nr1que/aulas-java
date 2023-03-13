function ativarContagem() {
    tempo = setInterval(function () {
        var cronometo = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometo) - 1;
        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "tempo esgotado"
            pararContagem()
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }

    }, 1000);
}

function pararContagem() {
    clearInterval(tempo)

}
function verificaCor() {
    let cor = document.getElementById('cor').value;

    cor = cor.toLowerCase();
    //trasforma o texto para minusculo para o comando funcionar

    switch (cor) {
        case "azul":
            document.body.style.background = "blue";
            break;
        case "vermelho":
            document.body.style.background = "red";
            break;
        case "amarelo":
            document.body.style.background = "yellow";
            break;
        case "verde":
            document.body.style.background = "green";
            break;

        default:
            document.getElementById('texto').innerHTML = 'nao foi encontrado nehuma cor';
    }

}

function diaDaSemana() {
    var dia = new Date().getDay();



    switch (dia) {
        case "0":
            document.getElementById('teste').innerHTML = 'e domingo'
            break;
        case "1":
            document.getElementById('teste').innerHTML = 'e segunda'
            break;
        case "2":
            document.getElementById('teste').innerHTML = 'e terça'
            break;
        case "3":
            document.getElementById('teste').innerHTML = 'e quarta'
            break;
        case "4":
            document.getElementById('teste').innerHTML = 'e quinta'
            break;
        case "5":
            document.getElementById('teste').innerHTML = 'e sexta'
            break;
        case "6":
            document.getElementById('teste').innerHTML = 'e sabado'
            break;

        default:
            document.getElementById('teste').innerHTML = 'nao e dia da semana';
    }
}
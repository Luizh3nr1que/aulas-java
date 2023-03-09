var hora = new Date().getHours();

if (hora < 12) {
    alert('bom dia')
} else if (hora < 18) {
    aalert('boa tarde')
} else {
    alert('boa noite')
}

function verificar() {
    let nome = document.getElementById('nome').value;

    if (nome == "" || nome == null) {
        let p = document.getElementById('texto').innerHTML = "o campo esta vazio";
    } else {
        let p = document.getElementById('texto').innerHTML = "tudo certo foi enviado com sucesso";
    }
}

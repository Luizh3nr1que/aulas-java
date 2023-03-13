const carros = ["gol", "fusca", "brasilia", "del rey", "chevette"];

var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById('teste').innerHTML += carros[i] + " - ";
}
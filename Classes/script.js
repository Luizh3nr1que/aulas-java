class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + "buzinou: biiiii";
    }
}


const uno = new Carro("fiat", "uno", 2001);
const gol = new Carro("volkswagen", "gol", 2013)


gol.ano = 2014;

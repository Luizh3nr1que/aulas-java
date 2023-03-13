// const carro = {
//     marca: "fiat",
//     modelo: "uno",
//     motor: ["1.6", "1.4", "1.0"]
// }
// //converteu para texto json
// let texto = JSON.stringify(carro);

// //colocou o texto no html
// document.getElementById('area').innerHTML = texto;

// //converteu novamente os de texto para objeto novamente
// let obj = JSON.parse(texto)

// //pegamos o valor deste objeto
// alert(obj.motor[2]);


function buscarCep() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');

    ajax.send();

    ajax.onload = function () {


        //tranformei o texto em objto 
        let obj = JSON.parse(this.responseText);

        //e aqui pegui alguns valores para mostrar
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro:" + logradouro + "<br> Cidade:" + cidade + "<br> Estado:" + estado;
    }
}
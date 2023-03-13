let data = new Date();

let ano = data.getFullYear();




let mes = data.getMonth();

const mesesDoAno = ["janeiro", "fevereiro", "março", "abriu", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let mesEscrito = mesesDoAno[data.getMonth()];


let diaMes = data.getDate();


let diaSemana = data.getDay

//pegar dia da semana atual de 0 ate 6 sendo 0 segunda 6 sabado


const diaDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"];

let diaSemanaEscrito = diaDaSemana[data.getDay]


let hora = data.getHours();


let minutos = data.getMinutes();


let segundos = data.getSeconds();

let mileSegundos = data.getMilliseconds();


//pega data padrao basil  dia/mes/ano

let dataBr = data.toLocaleString("pt-br", { dateStyle: 'short' });


let horaBr = data.toLocaleString("pt-br", { timeStyle: 'short' });


//pegar os valores separados e depois juntar

var d = new Date();
var diaDoMes = d.getDate();
var Mes = d.getMonth() + 1;
var Ano = d.getFullYear();

function addZero(x) { return x < 10 ? "0" + x : "" + x }

let dataPadraoBR = addZero(diaMes) + "/" + addZero(Mes) + "/" + Ano;

alert(dataPadraoBR)


//comparar datas maior ou menor ex vencimentos


var hoje = new Date();

var vencimento = new Date(2023, 3, 15);
//no jeito do java 0 e janeiro
if (hoje > vencimento) {
    alert('sua conta esta vencida');
} else {
    alert('ainda nao vanceu tudo certo')
}


//diferença entre 2 datas em dias

var dataInicial = new Date();

var dataFinal = new Date(2023, 11, 31)

var diferençaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferençasDias = Math.ceil(diferençaTempo / (24 * 60 * 60 * 1000));

alert(diferençasDias + "dias")
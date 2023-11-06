//==================== Variáveis ===========================

/*var varNumero = 10;
var varTexto = 'Texto';

console.log(varNumero + varTexto);
*/

//==================== Hoisting ============================

/*
var teste1 = function(){
    console.log('teste1');
}

function teste2() {
    console.log("teste2");
}

teste1();
teste2();
*/


//====================== Escopos e Diferenças entre Var ,Let e Const ===========================

const x = 10;
x = 11;

console.log(x);

// Var = permite reatribuição , ele vaza do escopo , se restringe a escopo de funções e ao escopo global.

// Let = restringe a qualquer tipo de escopo e ele é reatribuível.

// Const = restringe a escopo de bloco , e não pode ser atribuido.

var teste = 10;
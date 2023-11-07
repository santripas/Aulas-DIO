const quantidadeGolpes = 3;

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvão", "Ferro", "Diamante", "Pedra "];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
    let minaIndex = (i - 1) % minerais.length;
    console.log(i + ': ' + minerais[minaIndex]);
}


// TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
console.log

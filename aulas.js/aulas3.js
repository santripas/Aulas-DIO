//======== Protótipo, Funções Construtoras ==============
/*
const pessoa = {
    genero:'masculino'
}

const sandro = {
    nome: 'Sandro',
    idade: 31,
    __proto__:pessoa
}


console.log(sandro.genero);
*/

//========================================================
/*
function Pessoa(nome,idade) {
    this.nome = nome
    this.idade = idade
}

const sandro = new Pessoa('sandro',31)
console.log(sandro)


const pessoa = {
    genero: 'masculino'
}

const sandro = Object.create(pessoa)

sandro.nome = 'Sandro'

console.log(sandro)


//==================================================

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}
const sandro = new Pessoa('sandro',30)
sandro.falar()
*/
const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.log(renan.idade)
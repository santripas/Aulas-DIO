//=================== Manipulação de Listas =========================//




//========================= Foreach =============================//

/*
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value) => {
    console.log(value )
})
*/



//========================== Filter ==============================//

/*
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 == 0)
})

console.log(lista)
console.log(listaDeNumerosPares)
*/

//========================== Map ============================//

/*
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const lista = [new Pessoa('Sandro'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa('José')]



const listaHtml = lista.map((element) => {
    return`
    <li>
        ${element.nome}
    </li>
    `
})
console.log(listaHtml)
*/


//========================== Reduce ============================//
/*
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = lista.reduce((previous, curremt) => {
    console.log(previous,curremt)
    return previous + curremt
})

console.log(somaDeTodosOsNumeros)
*/

//========================== Join ============================//

const lista = [1, 2, 3]

console.log(lista.join(';'))
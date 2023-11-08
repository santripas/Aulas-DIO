//======================  Assincronismo com Promises =====================



/*
const promessasDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    },1000)

})

console.log('Vai filhão!')

promessasDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })
*/



//================================== Manipulando Arquivos através de Promises ==========================

    const fs = require('fs')

    fs.readFile()
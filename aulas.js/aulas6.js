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
    const path = require('path')

    const filePath =  path.resolve(__dirname, 'aulas6.csv')

    const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)

    promessaDaLeituraDoArquivo.then((arquivo) => {
        console.log(arquivo.toString('utf-8'))
    }).catch((error) => {
        console.log('Deu ruim!')
    })
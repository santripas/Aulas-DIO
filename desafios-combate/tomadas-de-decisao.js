// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = 'Elsa Yajin ';

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = 'Correr';


function escolha(acaoEscolhida, nomePersonagem) {


    if (acaoEscolhida === 'Fugir') {
        return `${nomePersonagem} escolheu Fugir!`;

    } else if (acaoEscolhida === 'Atacar') {
        return `${nomePersonagem} escolheu Atacar!`;

    } else {
        return 'Tente novamente';
    }
}


const mensagem = escolha(acaoEscolhida, nomePersonagem);
console.log(mensagem)

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
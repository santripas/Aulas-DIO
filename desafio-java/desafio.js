//Desafios JavaScript na DIO tem funções "gets" e "print" acessíveis globalmente:
//- "gets" : Lê uma linha com dado(s) de entrada (inputs), pulando linha.
//- "print": imprime um texto de saída (output), pulando linha.

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());


//Calcula o imposto através da função "calcularImposto":

const valorImposto = calcularImposto(valorSalario);

//Calcula e imprime a Saída ( com 2 casas decimais):

const saida = valorSalario = valorImposto + valorBeneficios;
print(saida.toFixed(2));

//Função útil para o calculo do imposto (baseado nas aliquotas).

function calcularImposto(salario){
    let aliquota = 0;
    if(salario >= 0 && salario <= 1100){
        aliquota = 0.05;
    }else if(salario >= 1100.01 && salario <= 2500.00){
        aliquota = 0.10;
    }else{
        aliquota = 0.15;
    }
    //TODO Criar as demais condições para as aliquitas de 10.00% e 15.00%.
    return aliquota * salario;
}
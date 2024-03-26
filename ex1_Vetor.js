const leia = require("readline-sync");

let vetorNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que voce deseja encontrar:  ")

for(let indice = 0; indice <= vetorNumeros.length; indice++){
    if (vetorNumeros[indice] === numero) {
        console.log(`O numero ${numero} está localizado na posicao: ${indice}.`)
    }else if(indice === vetorNumeros.length) {
        console.log(`O numero ${numero} não foi encontrado!`)

    }
}

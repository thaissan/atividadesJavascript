const leia = require('readline-sync');

let num1, num2;
        
num1 = leia.questionInt("\nDigite o primeiro numero do intervalo:  ")
num2 = leia.questionInt("\nDigite o último numero do intervalo: ")

if(num2 <= num1){
        console.log("\nIntervalo inválido!")
    }else {
        for(contador = num1; contador <= num2; contador++){//começa no 1, finaliza no 10 e soma 1
            if(contador %3 === 0 && contador %5 === 0 && contador !== 0){
                console.log(`${contador} é múltiplo de 3 e 5.`);
            } 
} 
    }

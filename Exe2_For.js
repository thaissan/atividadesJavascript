const leia = require('readline-sync');

let num, pares = 0, impares = 0, contador;
        
for(contador = 1; contador <= 10; contador++){
    num = leia.questionInt(`\nDigite o ${contador}o numero: `)

    if(num %2 === 0){
        pares++;
       }else{
        impares++;;
    }
}  

console.log(`Total de números pares: ${pares}.`);
console.log(`Total de números impares: ${impares}.`);
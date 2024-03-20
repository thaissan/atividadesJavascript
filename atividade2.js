const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = leia.questionFloat("\nDigite o valor da nota 1: ", {limitMessage: 'Digite um numero float'});
console.log("O valor digitado foi: " + nota1.toFixed(1));

nota2 = leia.questionFloat("\nDigite o valor da nota 2: ", {limitMessage: 'Digite um numero float'});
console.log("O valor digitado foi: " + nota2.toFixed(1));

nota3 = leia.questionFloat("\nDigite o valor da nota 3: ", {limitMessage: 'Digite um numero float'});
console.log("O valor digitado foi: " + nota3.toFixed(1));

nota4 = leia.questionFloat("\nDigite o valor da nota 4: ", {limitMessage: 'Digite um numero float'});
console.log("O valor digitado foi: " + nota4.toFixed(1));

media =  ((nota1 + nota2 + nota3 + nota4) / 4)
console.log("\nO valor da média final foi: " + media.toFixed(1));
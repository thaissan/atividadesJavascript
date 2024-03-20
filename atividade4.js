const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let calculo;

n1 = leia.questionFloat("\nDigite o valo do rumero 1: ", {limitMessage: 'Digite um numero float'});
console.log("numero 1: " + n1.toFixed(1));

n2 = leia.questionFloat("\nDigite o valor do numero 2: ", {limitMessage: 'Digite um numero float'});
console.log("numero 2: " + n2.toFixed(1));

n3 = leia.questionFloat("\nDigite o valor do numero 3: ", {limitMessage: 'Digite um numero float'});
console.log("numero 3: " + n3.toFixed(1));

n4 = leia.questionFloat("\nDigite o valor do numero 4: ", {limitMessage: 'Digite um numero float'});
console.log("numero 4: " + n4.toFixed(1));



calculo = (n1 * n2) - (n3 * n4);
console.log("\nDiferença: " + calculo.toFixed(1));
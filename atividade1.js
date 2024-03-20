const leia = require('readline-sync');

let salario;
let abono;

salario = leia.questionFloat("\nDigite o valor do salario: ", {limitMessage: 'Digite um numero float'});
console.log("O salario digitado foi: " + salario.toFixed(2));

abono = leia.questionFloat("\nDigite o valor do abono: ", {limitMessage: 'Digite um numero float'});
console.log("O abono digitado foi: " + abono.toFixed(2));

let novoSalario = salario + abono
console.log("\nO novo salário é: " + novoSalario.toFixed(2));



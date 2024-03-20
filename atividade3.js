const leia = require('readline-sync');

let salarioBruto;
let adcNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = leia.questionFloat("\nDigite o valor do salario bruto: ", {limitMessage: 'Digite um numero float'});
console.log("Salário Bruto: " + salarioBruto.toFixed(2));

adcNoturno = leia.questionFloat("\nDigite o valor do adicional noturno: ", {limitMessage: 'Digite um numero float'});
console.log("Adicional Noturno: " + adcNoturno.toFixed(2));

horasExtras = leia.questionFloat("\nDigite o valor das horas extras: ", {limitMessage: 'Digite um numero float'});
console.log("Horas Extras: " + horasExtras.toFixed(2));

descontos = leia.questionFloat("\nDigite o valor dos descontos: ", {limitMessage: 'Digite um numero float'});
console.log("Descontos: " + descontos.toFixed(2));

salarioLiquido =  ((salarioBruto + adcNoturno + (horasExtras * 5) - descontos))
console.log("\nSalário Líquido: " + salarioLiquido.toFixed(2));
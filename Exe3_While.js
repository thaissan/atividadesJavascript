const leia = require('readline-sync');

let idade, menorVinteUm = 0, maiorCinquenta = 0;

continua = leia.question("\nDigite 'S' para entrar no programa de leitura de idades (para encerrar, digite uma idade negativa) ").toUpperCase();

while(continua === "S"){
    idade = leia.questionInt("\n Digite uma idade:  ");

   if(idade < 0){
    console.log("O progama foi encerrado");
    break;
   }else if(idade < 21){
    menorVinteUm++;
   }else if(idade > 50){
    maiorCinquenta++;
   }
}

console.log(`Total de pessoas menores de 21 anos:  ${menorVinteUm}.`);
console.log(`Total de pessoas maiores de 50 anos ${maiorCinquenta}.`);
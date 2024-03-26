const leia = require('readline-sync');

let continua ="S", idade, genero, categoria, soma;
let back = 0, front = 0, mobile = 0, full = 0, total = 0, somaIdade = 0, media = 0.0;

while(continua === "S"){

    idade = leia.questionInt("\n Digite uma idade:  ");

    genero = leia.questionInt("\n Digite o Genero (1-MC/ 2-HC/3-NB/4-MT/5-HT/6-Outros):  ");

    categoria = leia.questionInt("\n Digite a Categoria (1-Back/2-Front/3=Mobile/4-Full):  ");

    continua = leia.question(`Quer continuar os calculos digite S ou N para sair: `).toUpperCase();

    if(categoria === 1)
        back++;

    if(categoria == 2 && (genero === 1 || genero === 4))
        front++;

    if(categoria === 3 && (genero ===2 || genero === 5) && idade > 40)
        mobile++;

    if(categoria === 4 && genero === 3 && idade > 30)
        full++;

    total += 1;

    somaIdade += idade;
    
    media = somaIdade / total;

    continua = leia.question("\n Deseja continuR (S/N)?").toUpperCase

}
console.log(`\n Total de pessoas desenvolvedoras Backend ${back}`);
console.log(`\n Total de mulheres desenvolvedoras Frontend ${front}`);
console.log(`\n Total de pessoas desenvolvedores Mobile maiores de 40 anos ${mobile}`);
console.log(`\n Total de pessoas não binárias desenvolvedoras Fullstack menores de 30 anos ${full}`);
console.log(`\n Total de que responderam a pesquisa ${total}`);
console.log(`\n Media total de pessoas responderam a pesquisa ${media.toFixed(2)}`);


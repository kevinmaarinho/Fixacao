console.clear();
const prompt = require('prompt-sync')();

/* exercicio de fixacao aula 03 - Imprimindo o maior número

let num1;
let num2;

console.log('Informe o primeiro numero: ');
num1 = +prompt();

console.log('Informe o segundo numero: ');
num2 = +prompt();

if (num1 > num2) {
    console.log(`O número ${num1} é o maior número`);
}
else if (num1 < num2) {
    console.log(`O número ${num2} é o maior número`);
} else {
    console.log('Os números são iguais')
}

Ler notas e dar aprovação com base na media

let nota1;
let nota2;
let nota3;
let nota4;
let media;

console.log('Informe sua primeira nota: ');
nota1 = +prompt();

console.log('Informe sua segunda nota: ');
nota2 = +prompt();

console.log('Informe sua terceira nota: ');
nota3 = +prompt();

console.log('Informe sua quarta nota: ');
nota4 = +prompt();

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media < 5) {
    console.log('Você foi reprovado')
}
else if (5 <= media  && media < 7) {
    console.log('Você está em recuperação');
}
else if (media => 7) {
    console.log('Você está aprovado.');
}

console.log(media);

Exercicio Par ou Impar

let num1 = +prompt('Informe um número:');
if (num1 % 2 == 00) {
    console.log('O número é par');
}
else {
    console.log('O número é impar')
}

Exercicio numeros multiplos entre si

let num1 = +prompt('Informe um número:');
let num2 = +prompt('Informe um segundo número:')
let num_maior;
let num_menor;

if (num1 > num2) {

    num_maior = num1;
    num_menor = num2;

} else if (num2 > num1) {

    num_maior = num2;
    num_menor = num1;
} else {

    num_maior = num1;
    num_menor = num2;
}


if (num_maior % num_menor == 0) {
    console.log('O número é multiplo');
}
else {
    console.log('O número não é multiplo');
}
*/

const nome = prompt('Digite seu nome completo: ');
const nomeReplace = nome.replace(' ', '');

console.log(nomeReplace);
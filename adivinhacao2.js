console.clear();
const prompt = require ('prompt-sync')();

let numero_aleatorio = Math.floor (Math.random() * (10 + 1));
let numero_usuario;
let cont = 1;

console.log('Vamos lá! Tente adivinhar qual o número inteiro que estou pensando de 0 a 10: ');
numero_usuario = +prompt();

while (numero_aleatorio != numero_usuario) {
    if (numero_aleatorio > numero_usuario) {
        console.log('O numéro que pensei é maior.');

       } else {
           console.log('O número que pensei é menor.');
       }  

    console.log('Você errou! Tente novamente:');
    numero_usuario = +prompt();
    cont++;


}

console.log(`Parabéns, você acertou o número em ${cont} rodadas.`);
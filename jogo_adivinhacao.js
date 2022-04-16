console.clear();
const prompt = require('prompt-sync')();

let numero_aleatorio = Math.floor (Math.random() * (10 + 1));
let numero_usuario;

console.log('Vamos lá! Tente adivinhar qual o número inteiro que estou pensando de 0 a 10: ');
numero_usuario = +prompt();


if (numero_usuario == numero_aleatorio) {
    console.log('CHICO XAVIER NÃO MORREU! VOCÊ ACERTOU');
} else if (numero_usuario != numero_aleatorio) {
    console.log('Vacilou, perdeu! Você errou');
}

console.log(`Esse é o número que eu estava pensando era o ${numero_aleatorio}`);

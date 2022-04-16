console.clear();
const prompt = require('prompt-sync')();

let nome_usuario;
let senha;

console.log('Informe seu nome de usuário: ');
nome_usuario = prompt().toLowerCase();

console.log('Informa a sua senha: ');
senha = prompt().toLowerCase();

while (nome_usuario == senha) {

    console.log('A senha informada é igual ao seu nome de usuario! Digite novamente');
    senha = prompt().toLowerCase();
}
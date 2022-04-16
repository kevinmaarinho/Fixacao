console.clear();
const prompt = require ('prompt-sync')();

let numero_par = +prompt('Informe um número par: ');

while (numero_par % 2 != 0) {

    console.log('O número informado é impar. Digite novamente: ');
    numero_par = +prompt();

}
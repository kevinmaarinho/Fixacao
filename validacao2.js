console.clear();
const prompt = require ('prompt-sync')();

let nome;
let idade;
let salario;
let estado_civil;


console.log('Informe seu nome: ');
nome = prompt();
nome.length;

while (nome.length <= 3) {
    console.log('Seu nome é muito curto! Digite novamente: ');
    nome = prompt();
}

console.log('Informe sua idade: ');
idade = +prompt();

while ( idade < 0 || idade > 150) {
    console.log('Idade Inválida! Digite novamente: ');
    idade = +prompt();
 }

console.log('Informe seu salário: ');
salario = +prompt();

while (salario < 0){
    console.log('Salário inválido. Digite novamente: ');
    salario = +prompt();

}

console.log ('Informe seu estado civil. Digite "c" para Casado, "s" para Solteiro, "v" para Viúvo e "d" para Divorciado: ');
estado_civil = prompt();

while (estado_civil != 'c' && estado_civil != 's' && estado_civil != 'v' && estado_civil != 'd') {
    console.log('Estado civil inválido. Digite novamente: ');
    estado_civil = prompt();
}

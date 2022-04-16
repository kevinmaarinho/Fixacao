console.clear();
const prompt = require ('prompt-sync')();

let valor_saque;

console.log('Informe o valor do saque desejado (Limite Máximo de R$ 600): ');
valor_saque = +prompt();

while (valor_saque <10 && valor_saque > 600) {
    console.log('Saque indisponível. Informe o valor do saque desejado (Limite Máximo de R$ 600): ')
    valor_saque = +prompt();
}

if (valor_saque => 100) {
    console.log('Notas de 100: ', (valor_saque % 100));

} 


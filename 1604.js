console.clear();
const prompt = require('prompt-sync')();

let salario;
let salario_reajuste;

console.log('Informe o salário do colaborador: ');
salario = +prompt();

if (salario <= 280) {
    salario_reajuste = salario + (salario * 0.2);
    console.log('Salário anterior: ', salario.toFixed(2));
    console.log('Você recebeu um aumento de 20%');
    console.log('Seu aumento será no valor de ', (salario_reajuste - salario).toFixed(2));
    console.log('Seu novo salario é de: ', salario_reajuste.toFixed(2));

} else if (280 < salario && salario < 700) {
    salario_reajuste = salario + (salario * 0.15);
    console.log('Salário anterior: ', salario.toFixed(2));
    console.log('Você recebeu um aumento de 15%');
    console.log('Seu aumento será no valor de ', (salario_reajuste - salario).toFixed(2));
    console.log('Seu novo salario é de: ', salario_reajuste.toFixed(2));

} else if (700<= salario && 1500 > salario){
    salario_reajuste = salario + (salario * 0.10);
    console.log('Salário anterior: ', salario.toFixed(2));
    console.log('Você recebeu um aumento de 10%');
    console.log('Seu aumento será no valor de ', (salario_reajuste - salario).toFixed(2));
    console.log('Seu novo salario é de: ', salario_reajuste.toFixed(2));

} else {
    salario_reajuste = salario + (salario * 0.05);
    console.log('Salário anterior: ', salario.toFixed(2));
    console.log('Você recebeu um aumento de 5%');
    console.log('Seu aumento será no valor de ', (salario_reajuste - salario).toFixed(2));
    console.log('Seu novo salario é de: ', salario_reajuste.toFixed(2));

}



/**
 * Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores,
 * porém temos apenas a quantidade de horas trabalhadas e o valor hora.
 * Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas,
 * o valor que recebe por hora e calcula o salário desse colaborador.
 * Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.
 */
let colaboradores = parseInt(gets());
let horas = parseInt(gets());
let valorHora = parseFloat(gets());

let salario = parseFloat(horas * valorHora).toFixed(2);

console.log(`Número = ${colaboradores}`);
console.log(`Salário = U$ ${salario}`);
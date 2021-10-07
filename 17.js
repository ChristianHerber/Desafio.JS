/**
 * Ler uma entrada de um número inteiro
 * e retornar a tubuada do mesmo
 */

let num = prompt('Número')

function calcular(num) {
    return(`
        ${num} x 1 = ${1*num}
        ${num} x 2 = ${2*num}
        ${num} x 3 = ${3*num}
        ${num} x 4 = ${4*num}
        ${num} x 5 = ${5*num}
        ${num} x 6 = ${6*num}
        ${num} x 7 = ${7*num}
        ${num} x 8 = ${8*num}
        ${num} x 9 = ${9*num}
        ${num} x 10 = ${10*num}
    `)
}

console.log(calcular(num))
/**
 * Faça a leitura de um valor inteiro.
 * Em seguida, calcule o menor número de notas possíveis (cédulas)
 * onde o valor pode ser decomposto.
 * As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
 * Na sequência mostre o valor lido e a relação de notas necessárias.
 */

let valor = parseInt(prompt("valor: "))
let v = valor

let cem = Math.trunc(valor/100)
valor = valor - (cem * 100)

let cinquenta = Math.trunc(valor/50)
valor = valor - (cinquenta * 50)

let vinte = Math.trunc(valor/20)
valor = valor - (vinte * 20)

let dez = Math.trunc(valor/10)
valor = valor - (dez * 10)

let cinco = Math.trunc(valor/5)
valor = valor - (cinco * 5)

let dois = Math.trunc(valor/2)
valor = valor - (dois * 2)

let um = Math.trunc(valor/1)
valor = valor - (um * 1)

console.log(`
    ${v}
    ${cem} nota(s) de R$ 100,00
    ${cinquenta} nota(s) de R$ 50,00
    ${vinte} nota(s) de R$ 20,00
    ${dez} nota(s) de R$ 10,00
    ${cinco} nota(s) de R$ 5,00
    ${dois} nota(s) de R$ 2,00
    ${um} nota(s) de R$ 1,00
`);
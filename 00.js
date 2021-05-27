/**
 * Crie um programa que leia 6 valores.
 * Você poderá receber valores negativos e/ou positivos como entrada,
 * devendo desconsiderar os valores nulos.
 * Em seguida, apresente a quantidade de valores positivos digitados.
 */
let n = []
let positivo = 0

for(var i = 1; i <= 6; i++){
    let num = prompt(`Digite o ${i}º número`)
    n.push(Number(num))
    if(num > 0){
        positivo = parseInt(positivo) + 1
    }
}

console.log(`${positivo} valores positivos`)
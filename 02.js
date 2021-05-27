/**
 * Você deve fazer a leitura de 5 valores inteiros.
 * Em seguida mostre quantos valores informados são pares,
 * quantos valores informados são ímpares,
 * quantos valores informados são positivos e quantos valores informados são negativos.
 */
let n = []
let positivo = 0
let negativo = 0
let par = 0
let impar = 0

for(var i = 1; i <= 5; i++){
    let num = prompt(`Digite o ${i}º número`)
    n.push(Number(num))
    
    if(num > 0){
        positivo = parseInt(positivo) + 1
    } else {
        negativo = parseInt(negativo) + 1
    }
    
    if(num % 2 == 0){
        par = parseInt(par) + 1
    } else {
        impar = parseInt(impar) + 1
    }

}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)
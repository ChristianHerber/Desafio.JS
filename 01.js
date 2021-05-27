/**
 * Crie um programa que leia um número
 * e mostre os números pares até esse número,
 * inclusive ele mesmo.
 */
let n = prompt("Digite um número")

for(let num = 0; num <= n; num++){
    if(num%2 == 0){
        console.log(num)
    }
}
/**
 * Leia 4 valores inteiros A, B, C e D.
 * Com base nisso, se o valor de B for maior do que de C e se D for maior do que A,
 * e a soma de C com D for maior que a soma de A e B e se tanto C quanto D forem positivos e,
 * ainda, se a variável A for par,
 * escreva a mensagem "Valores aceitos",
 * senão escrever "Valores nao aceitos".
 */

let A = prompt("A")
let B = prompt("B")
let C = prompt("C")
let D = prompt("D")

if(B > C){
    if(D > A){
        if((C+D) > (A+B)){
            if(C > 0 && D > 0){
                if(A%2 == 0){
                    console.log("Valores Aceitos")
                }
            }
        }
    }
} else {
    console.log("Valores nao aceitos")
}
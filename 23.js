let A = prompt("1º Número")
let B = prompt("2º Número")
let C = prompt("3º Número")
let D = prompt("4º Número")

if( (B>C) && (D>A) && ((C+D) > (A+B)) && (C>0 && D>0) && (A%2==0)){
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}
const num1 = prompt("Digite o primeiro número: ")
const num2 = prompt("Digite o segundo número: ")
let resultado 

if(num2 > num1) {
    if( num2 < 0) {
        resultado = Number(num1) / Number(num2)
    } else {
        resultado = Number(num2) / Number(num1)
    }
    console.log("num2 >")
} else {
    resultado = Number(num1) / Number(num2)
    console.log("num2 <")
}

console.log(resultado)

if(Number.isInteger(resultado)) {
    console.log("São Multiplos")
} else {
    console.log("Não são Multiplos")
}
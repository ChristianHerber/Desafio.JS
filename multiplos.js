const num1 = prompt("Digite o primeiro número: ")
const num2 = prompt("Digite o segundo número: ")
const resultado = Number(num1) / Number(num2)

if(Number.isInteger(resultado)) {
    console.log("São Multiplos")
} else {
    console.log("Não são Multiplos")
}
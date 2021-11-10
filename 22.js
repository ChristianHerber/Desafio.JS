let num1 = Number(prompt('Dividir: '))
let num2 = Number(prompt('Por: '))
let resultado
let resto

if(num2 === 0){
    alert('Impossível divir por 0.')
} else {
    resultado = num1 / num2
    resto = num1 % num2
}

console.log(resultado, resto)
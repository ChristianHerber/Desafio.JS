/*
- Crie uma função que recebe dois números inteiros como parâmetros.
- Confira se os números iguais
- Confira se a soma dos números é maior que 10 ou menor que 10
- Confira se a soma dos números é maior que 20 ou menor que 20
- Retorne uma string dizendo "Os números num1 e num 2 não/são iguais. Sua soma é soma, que é maior/menor que 10 ee maior/menor que 20"
*/

function myNumbers(num1, num2){

    if(!num1 || !num2) return 'Informe os dois números'
    
    let myOutputString = `Os números ${num1} e ${num2} `

    num1 == num2 ? myOutputString += `são iguais.` : myOutputString += `não são iguais.`

    let soma = num1 + num2
    myOutputString += ` Sua soma é ${soma}, `

    soma > 10 ? myOutputString += `que é maior que 10 ` : myOutputString += `que é menor que 10 `
    
    soma > 20 ? myOutputString += `e que é maior que 20.` : myOutputString += `e que é menor que 20.`

    return myOutputString
}

console.log(myNumbers())
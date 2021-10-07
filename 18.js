/**
 * Ler a entrada de um número e verificar
 * em qual intervalo ele está
 */

let x = parseFloat(prompt("Digite uma valor."))

function verificaX(x){
    if(x >= 0 && x <= 25){
        return("Intervalo entre [0,25]")
    } else if(x > 25 && x <= 50){
        return("Intervalo entre [25,50]")
    } else if(x > 50 && x <= 75){
        return("Intervalo entre [50,75]")
    } else if(x > 50 && x <= 75){
        return("Intervalo entre [50,75]")
    } else {
        return("Fora do Intervalo")
    }
}

console.log(verificaX(x))
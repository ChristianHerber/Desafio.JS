//Verificar se a palavra é um palíndromo

function verificaPalindromo(texto){

    if(!texto) return 'Informe uma palavra'

    let textoReverso = texto.split("").reverse().join("")

    if(textoReverso === texto){
        return `A palavra ${texto} é um palíndromo.`
    } else {
        return `A palavra ${texto} não é um palíndromo.`
    }
}

console.log(verificaPalindromo("reviver"))
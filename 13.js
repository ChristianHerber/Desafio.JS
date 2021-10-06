/**
 * Da a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.
 * Crie seus próprios objetos para esta atividade
 */

const pessoa0 = {
    nome: "Christian",
    idade: 34
}

const pessoa1 = {
    nome: "Mara",
    idade: 33
}

function calculaIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} de idade.`
}

console.log(calculaIdade.call(pessoa1, 6))
console.log(calculaIdade.apply(pessoa0, [6]))
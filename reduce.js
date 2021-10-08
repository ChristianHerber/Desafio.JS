const myArray = [10,25]
function somaItem(){
    return myArray.reduce( (valorAcumulado, valorAtual) => valorAcumulado + valorAtual, 0 )
}
console.log(`Soma dos itens do array: ${somaItem()}`)



const precos = [10,30]
const saldo = 100
function calculaSaldo(saldo, precos){
    return precos.reduce( function(prev, curr){
        return prev - curr
    }, saldo)
}
console.log(calculaSaldo(saldo, precos))
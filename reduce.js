const myArray = [1,2,3,4,5,6,7,8,9]

function somaItem(){
    return myArray.reduce( (anterior, proximo) => anterior + proximo, 0 )
}

console.log(`Soma dos itens do array: ${somaItem()}`)
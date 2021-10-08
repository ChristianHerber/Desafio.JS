const myArray = [1,2,3,4,5,6,7,8,9]

function multipleArray(num){
    return myArray.map( (arrayItem) => arrayItem * num )
}

function parArray(){
    let newArray = []
    myArray.map( (arrItem) => {
        if(arrItem % 2 === 0){
            newArray.push(arrItem)
        }
    })
    return newArray
}

function somaItem(){
    return myArray.reduce( (anterior, proximo) => anterior + proximo, 0 )
}

console.log(`Itens do array multiplicado por 2: ${multipleArray(2)}`)
console.log(`Apenas os itens pares: ${parArray()}`)
console.log(`Soma dos itens do array: ${somaItem()}`)
const myArray = [1,2,3,4,5,6,7,8,9]
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Laranja']

function somaItem(){
    return myArray.reduce( (anterior, proximo) => anterior + proximo, 0 )
}

function procuraFruta(fruta){
    return frutas.filter( (ft) => ft.includes(fruta))
}

console.log(`
    Soma dos itens do array: ${somaItem()}
    A fruta ${procuraFruta('Laranja')} foi encontrado no array de frutas. 
`)
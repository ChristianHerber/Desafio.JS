const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Laranja']

function procuraFruta(fruta){
    return frutas.filter( (ft) => ft.includes(fruta))
}

console.log(`A fruta ${procuraFruta('Laranja')} foi encontrado no array de frutas. `)
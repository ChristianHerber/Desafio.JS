const country = ['Brasil', 'Argentina', 'Uruguai', 'México', 'Canadá', ['Espanha','França']]

//Listando cada item do array com seu respectivo índice
country.forEach( (countryItem, countryIndex) => {
    console.log(`${countryIndex}:${countryItem}`)
})

//criando um novo array com cada intem do array country,
//deixando todos os itens no mesmo nível com o flat
//deixando todos em maiúsculo
const countryUpper = country.flat().map( (countryItem) => {
    console.log(countryItem.toUpperCase())
})

//retornando um array com as chaves do array alvo
const countryKeys = country.flat().keys()
//navegando para a próxima key/índice do array
console.log(countryKeys.next())
console.log(countryKeys.next())
console.log(countryKeys.next())
console.log(countryKeys.next())
console.log(countryKeys.next())
console.log(countryKeys.next())
console.log(countryKeys.next())

//retornando um array com os valores do array alvo
const countryValues = country.values()
//navegando para o próximo valor do array
console.log(countryValues.next())
console.log(countryValues.next())
console.log(countryValues.next())
console.log(countryValues.next())
console.log(countryValues.next())
console.log(countryValues.next())
console.log(countryValues.next())

//retornando um array com chave e valor
const countryEntries = country.entries()
//navegando para as próximas entradas do array
console.log(countryEntries.next())
console.log(countryEntries.next())
console.log(countryEntries.next())
console.log(countryEntries.next())
console.log(countryEntries.next())
console.log(countryEntries.next())
console.log(countryEntries.next())

//retorna um novo array que atende ao filtro aplicado
const countryFilter = country.filter( value => value === 'Uruguai')
console.log(countryFilter)

//verifica se determinado elemento está no array alvo
const coutryIncludes = country.includes("México")
console.log(coutryIncludes)

//invertendo a ordem do array
const countryReverse = country.reverse()
console.log(countryReverse)

//junta todos os elemento do array e retona uma string separada por um delimitador
const countryJoin = country.join('|')
console.log(countryJoin)

//retonando uma string com reduce
const conutryReduce = country.reduce( (countryNames, countryName) => countryNames += countryName + ', ', '' )
console.log(conutryReduce)

//retorna o tatal de letras dos itens do array alvo
const countryNameSum = country.flat().reduce( (nameTotalLetters, nameLetters) => nameTotalLetters += nameLetters.length, 0 )
console.log(countryNameSum)
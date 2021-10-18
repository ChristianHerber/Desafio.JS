let person = ['John', 'Luke', 'Mettew']
let fruits = ['banana', 'orange']

console.log(person)
person.push("Yeshua") //add item como últimno da lista
console.log(person)

person.pop() //remove o úultimo item do array 
console.log(person)

person.unshift("Paul") //add item no início do array
console.log(person)

person.shift() //remove o item do início do arrya
console.log(person)

const personFruits = person.concat(fruits) //unindo 2 arrays
console.log(personFruits)

fruits = personFruits.slice(3) //cortando o array a partir do índice 3
console.log(fruits)

person = personFruits.slice(0,3) //cortando o array do índice 0 ao 3
console.log(person)

personFruits.splice(0,2,"Joseph", "Mary") //remove itens do array a partir da posição 0 até a posição 2 e add "Joseph" e "Mary"  
console.log(personFruits)
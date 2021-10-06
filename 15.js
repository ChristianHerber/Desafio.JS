/**
 * Dados o array [30,30,40,5,223,2049,3034,5], retorne outro array com apenas valores únicos
 */

const array = [30,30,40,5,223,2049,3034,5]

function setArray(arr){
    const newArray = [...new Set(arr)]
    return newArray
}

console.log(setArray(array))
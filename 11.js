//Troque todos os elementos pares diferentes de 0,
//se o array for vazio retorne -1

function trocaPar(myArray){

    if(!myArray) return -1
    if(!myArray.length) return -1

    for(let i = 0; i < myArray.length; i++){

        let myArrayValue = myArray[i].valueOf()

        if( myArrayValue % 2 === 0){
            myArray[i] = 0
        }
    }

    return myArray
}

console.log(trocaPar([1,2,3,4,5,6,7,8,9,10]))
/**
 * Crie uma função que receba dois parametros, um array e um número
 * apresente o array apensa se o tamanho do array seja igual ao número
 * trate os erros com try catch
 */

function tratarErro(arr, num){
    try {
        if(!arr || !num) throw new ReferenceError("Necessário passar os parâmetros.")
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object")
        if(typeof num !== 'number') throw new TypeError("num precisa ser um número")
        if( arr.length !== num) throw new RangeError("O tamanho do array é diferente de num")
        return arr
    } catch(e) {
        if(e instanceof ReferenceError){
            return(`
                Este é um ReferenceError
                ${e.message}
            `)
        } else if(e instanceof TypeError) {
            return(`
                Este é um TypeError
                ${e.message}
            `)
        } else {
            return(`
                Este é um RangeError
                ${e.message}
            `)
        }
    }//try - catch
}//trataErro

console.log(tratarErro([1,2,3,4,5,6,7,8], 8))
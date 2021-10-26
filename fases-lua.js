let percentual = prompt().split(',')

let percIni = Number(percentual[0])
let percFim = Number(percentual[1])

if(percIni >= 0 && percFim <= 2){
    console.log('Lua Nova')
} else if(percFim > percIni && percFim <= 96) {
    console.log('Lua Crescente')
} else if(percIni >= 3 && percFim <= 96){
    console.log('Lua Minguante')
} else {
    console.log('Lua Cheia')
}
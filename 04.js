/**
 * Você deve calcular o consumo médio de um automóvel
 * onde será informada a distância total percorrida (em Km)
 * e o total de combustível consumido (em litros).
 */
let km = prompt("Distância em Km")
let consumo = prompt("Total de combustível consumido")

let kml = km / consumo
kml = kml.toFixed(3)

console.log(`${kml} km/l`)
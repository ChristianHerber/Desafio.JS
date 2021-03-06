/**
 * Você recebeu desafio para determinar qual dos produtos é o preferêncial dos clientes de um posto de abastecimento de combustível.
 * Para isso você deve escrever um algoritmo para ler o tipo de combustível abastecido
 * (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim).
 * Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido).
 * O programa será encerrado quando o código informado for o número 4.
 */

function produtoPreferencia(){

    let X = 0;
    let alcool = 0;
    let gasolina = 0;
    let diesel = 0;

    while (X !== 4 ) {
        X = parseInt(prompt(`
                Abastecer com
                [1] - Álcool
                [2] - Gasolina
                [3] - Diesel
                [4] - Encerrar
            `));
        if (X === 1) {
            alcool++;
        } else if (X === 2) {
            gasolina++;
        } else if (X === 3) {
            diesel++;
        } 
    }

    return(`
        MUITO OBRIGADO
        Alcool: ${alcool}
        Gasolina: ${gasolina}
        Diesel: ${diesel}
    `)

}

console.log(produtoPreferencia())
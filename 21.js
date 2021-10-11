/**
 * Lembre que, se o salário for R$ 3002.00,
 * a taxa que incide é de 8% apenas sobre R$ 1000.00,
 * pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda.
 * No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total.
 * O valor deve ser impresso com duas casas decimais.
 */
let salario = prompt("Salário: ");

function calcularImposto(valor) {

    let imposto = 0;
    let montante;
    let salario = valor;

    if (salario > 4500.00) {
        montante = salario - 4500.00;
        imposto = (montante * 0.28) + 350;
    } else if (salario > 3000.00) {
        montante = salario - 3000.00;
        imposto += (montante * 0.18) + 80;
    } else if (salario > 2000.00) {
        montante = salario - 2000.00;
        imposto += (montante * 0.08);
    }
    
    return imposto;

}

let resultado = calcularImposto(salario);

console.log((resultado === 0) ? "Isento" : `R$ ${resultado.toFixed(2)}`);
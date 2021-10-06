/**
 * 1.Crie uma função que recebe um array alunos e um número que irá representar a média final;
 * 2.Percorra o array e popule um novo array auxiliar apenas com os alunos cujas as notas são maiores ou iguais à média final;
 * 3.Utilize a técnica object destructuring para manipular as propriedades de cada aluno
 */

const alunos = [
    {
        nome: "Christian",
        nota: 7
    },
    {
        nome: "Mara",
        nota: 6
    },
    {
        nome: "Iohann",
        nota: 8
    }
]

function aprovados(aluno, media){

    let alunosAprovados = []

    for(let i = 0; i < alunos.length; i++){

        const {nota, nome} = aluno[i]

        if(nota >= media){
            alunosAprovados.push(nome)
        }

    }

    return alunosAprovados

}

console.log(aprovados(alunos, 7))
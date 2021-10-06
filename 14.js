/**
 * Crie uma função que retorno o nome dos membros de um Map que tem o papel 'ADMIN' no sistema
 */

function getAdmins(map){

    let admins = []

    for ([key, value] of map) {
        if(value == 'Admin'){
            admins.push(key)
        }
    }

    return admins

}

const usuarios = new Map()

usuarios.set('Christian', 'Admin')
usuarios.set('Mara', 'User')
usuarios.set('Iohann', 'Admin')


console.log(getAdmins(usuarios))
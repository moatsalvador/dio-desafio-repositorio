function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Natalia', 'User');
usuarios.set('Jonas', 'User');
usuarios.set('Maria', 'Admin');

console.log(getAdmins(usuarios));


///sets 
const meuArray = [30,30,40,5, 223,2049,3034,5];
function valoresUnicos(arr){
    const mySet = new Set(arr);
    //para tornar elementos de um array necessário usar o spred
    return [...mySet];
}

console.log(valoresUnicos(meuArray));
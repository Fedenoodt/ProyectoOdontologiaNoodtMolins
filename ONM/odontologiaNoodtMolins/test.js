fetch('registros.json')
.then((response) => response.json())
// .then((data) => document.write(data));
// .then((data) => console.log(data));
.then((data) => localStorage.setItem('registro', JSON.stringify(data)))


let registro = localStorage.getItem('registro');
let items = registro.length;
console.log(items)


// Este módulo de debajo muestra a la perfección los objetos, dentro de una lista de objetos.

// Haciendo un retorno perfecto de la lista de objetos. No tocar.

// function listaObjetos () {
//     const conversor = JSON.parse(registro);
//     let constructor = '';
//     for (let i = 0; i < conversor.length; i++) {
//         let datos = JSON.stringify(conversor[i]);
//         constructor += datos
//     }
//     return constructor
// }

function listaObjetos () {
    const conversor = JSON.parse(registro);
    let constructor = '';
    for (let i = 0; i < conversor.length; i++) {
        let datos = JSON.stringify(conversor[i]);
        constructor += datos
    }
    return constructor
}

// desComillar hace limpieza de todos los caracteres a la perfección. NO TOCAR.

// function desComillar () {
//     const conversor = listaObjetos();
//     // console.log(conversor)

//     let reescritura = '';
//     for (let i = 0; i < conversor.length; i++) {
//         if (conversor[i] == '"' | conversor[i] == '{' | conversor[i] == '}' | conversor[i] == '[' | conversor[i] == ']') 
//         {reescritura += ''}
//         else {reescritura+= conversor[i]}
//         // console.log(reescritura[i])
//     }
//     // conversor.replace(':', '')
//     return reescritura
// }

function desComillar () {
    const conversor = listaObjetos();
    // console.log(conversor)

    let reescritura = '';
    for (let i = 0; i < conversor.length; i++) {
        if (conversor[i] == '"' | conversor[i] == '{' | conversor[i] == '}' | conversor[i] == '[' | conversor[i] == ']' | conversor[i] == '.') 
        {reescritura += ''}
        else if (conversor[i] == ':' | conversor[i] == ','){
            reescritura += `${conversor[i]} `
        }
        else {reescritura+= conversor[i]}
        // console.log(reescritura[i])
    }
    // conversor.replace(':', '')
    return reescritura
}

let limpio = desComillar()
console.log(limpio)
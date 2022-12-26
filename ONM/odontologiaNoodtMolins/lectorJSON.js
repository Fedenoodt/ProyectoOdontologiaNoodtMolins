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

// Y este modelo de desComillas limpia y ordena en una sola línea el JSON. No tocar.

// function desComillar () {
//     const conversor = listaObjetos();
//     // console.log(conversor)

//     let reescritura = '';
//     for (let i = 0; i < conversor.length; i++) {
//         if (conversor[i] == '"' | conversor[i] == '{' | conversor[i] == '}' | conversor[i] == '[' | conversor[i] == ']' | conversor[i] == '.') 
//         {reescritura += ''}
//         else if (conversor[i] == ':' | conversor[i] == ','){
//             reescritura += `${conversor[i]} `
//         }
//         else if (conversor[i] == 'c' & conversor[i+1] == 'r' & conversor[i+2] == 'e' & conversor[i+3] == 'd' & conversor[i+4] == 'e' & conversor[i+5] == 'n' & conversor[i+6] == 'c' & conversor[i+7] == 'i' & conversor[i+8] == 'a' & conversor[i+9] == 'l') {
//             reescritura += ` c`
//         } 
//         else {reescritura+= conversor[i]}
//         // console.log(reescritura[i])
//     }
//     // conversor.replace(':', '')
//     return reescritura
// }

// let limpio = desComillar()
// document.write(limpio)

function desComillar () {
    const conversor = listaObjetos();
    console.log(conversor)

    let reescritura = '';
    for (let i = 0; i < conversor.length; i++) {
        if (conversor[i] == '"' | conversor[i] == '{'  | conversor[i] == '[' | conversor[i] == ']' | conversor[i] == '.') 
        {reescritura += ''}
        else if (conversor[i] == ':' | conversor[i] == ','){
            reescritura += `${conversor[i]} `
        }
        else if (conversor[i] == 'c' & conversor[i+1] == 'r' & conversor[i+2] == 'e' & conversor[i+3] == 'd' & conversor[i+4] == 'e' & conversor[i+5] == 'n' & conversor[i+6] == 'c' & conversor[i+7] == 'i' & conversor[i+8] == 'a' & conversor[i+9] == 'l') {
            reescritura += ` c`
        } 
        else if (conversor[i] == '}') {
            reescritura += ` </br> `
        }
        else {reescritura+= conversor[i]}
        // console.log(reescritura[i])
    }
    // conversor.replace(':', '')
    return reescritura
}

let limpio = desComillar()
document.write(limpio)
// | conversor[i] == '}'
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

function desComillar () {
    const conversor = listaObjetos();
    // console.log(conversor)

    for (let i = 0; i < conversor.length; i++) {
        if (conversor[i] == '"' | conversor[i] == '{' | conversor[i] == '}' | conversor[i] == '[' | conversor[i] == ']') 
        // {document.write('ALTERCADOOO')
        conversor.replace(`${conversor[i]}`, ``)
        document.write(conversor[i])
    }
    // conversor.replace(':', '')
    return conversor
}

desComillar()
// Variables Generales
localStorage.clear()
const listaA = {'general': 'Juan Perez', 'ondodoncia': 'Agustina Morón', 'ortodoncia': 'Lucía Ferrera', 'radiografias': 'Lucas Vinicius'};
const listaB = {'general': 'Facundo García', 'ondodoncia': 'Soledad Rodriguez', 'ortodoncia': 'Maria Valtazar', 'radiografias': 'Carlos Pereyra'};

const DateTime = luxon.DateTime
const dt = DateTime.now();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// OPCIÓN B...

let credencial = prompt('Ingrese el número de credencial de 8 números');
//     Este prompt toma la labor de revisar que el usuario halla ingresado bien la credencial.
    if (credencial.length == 8){
        console.log(`*La credencial número ${credencial} fue enviada a una base de datos para revisión...*`)
        main()
    }
    else {
        alert(`Ingrese un número de credencial válido.`)
        fail()
    }


function relojDosDigitos (valor) {
    // relojDosDigitos trabaja para que se genere un cero en todos los casos que ese 
    // tiempo es menor a 10.
    if (valor < 10) {
        termino = '0' + valor;
    }
    else {
    termino = valor;}
    return termino
}

function main () {
// "main" se encarga de construir la línea del programa.
    document.write(`<center><h1>Swiss Medical Caballito</h1><br /></center>`);
    // Este es el primer segmento constructor del turno del usuario.
    document.write(`<center><h2>Ticket del Centro Odontológico</h2><br /><h3>Ingrese los datos</h3></center>`);
    // Se arma el interrogante sobre que tipo de consulta se trata.
    let turno = document.createElement("div");
    turno.innerHTML = `
    <div><center>
    <form id="tipoPacientes">
        <label for="tur">Turno</label><br />
        <select name = "turno" id = "tur" multiple>
            <option value = "general">Odontología General</option>
            <option value = "ondodoncia">Ondodoncia</option>
            <option value = "ortodoncia">Ortodoncia</option>
            <option value = "radiografias">Radiografías</option>
        </select>
        <input type = "submit" value = "Submit" />
    </form>
    </center></div>`;

    document.body.appendChild(turno);
    // Y se registra lo que haya devuelto.
    let tomaTurno = document.getElementById("tipoPacientes");
    tomaTurno.addEventListener("submit", registrar);

    function registrar (valor) {
    //     "Registrar" tiene la tarea de ver que opción seleccionó un usuario, y darle su turno.
        valor.preventDefault();
        let tipoPacientes = valor.target
        let objetivo = (tipoPacientes.children[2].value)
    //     De que valor tome el paciente, va a depender el tipo de turno.
        if (objetivo == 'general') {
            tipo = "A";
                tipoPacientes.children[0].value
            } 
        else if 
            (objetivo == 'ondodoncia') {
                tipo = "B";
                tipoPacientes.children[1].value
            } 
        else if 
            (objetivo == 'ortodoncia') {
                tipo = "C";
                tipoPacientes.children[2].value
            }

        else if
            (objetivo == 'radiografias') {
                tipo = "D";
                tipoPacientes.children[3].value
            }

    // Como este programa no va a ser usado por 999 pacientes, o más al dia, turnoID es la variable que genera un número aleatorio durante la ejecución
    turnoID = Math.round(Math.random() * 1000);
    // retorno es la "reunión" entre la especialidad del turno, con el número aleatorio generado.
    retorno = tipo + turnoID;
    //  Guardamos el retorno con el nombre de "Turno" en caso de necesitarlo más tarde.

    let personal = tipo >= 500 ? listaA[objetivo] : listaB[objetivo] 
    //    "personal" difiere entre el Grupo A y B de profesionales. Se encarga de ordenar, dependiendo del turno, al personal que corresponde a el turno.

    let mes = meses[dt.month - 1];

    let dias = relojDosDigitos(dt.day);
    let horas = relojDosDigitos(dt.hour);
    let minutos = relojDosDigitos(dt.minute);

    let dia = `${dias} de ${mes} de ${dt.year}`;
    let hora = `${horas}:${minutos}hs.`;
    let imagen = `<br /><br /><h1>Su turno es ${retorno}.</h1><br /><h1>Será llamado por apellido, por el profesional ${personal} de ${objetivo}.</h1><br /><h3>Y recuerde lavarse los dientes :)</h3><br /><br /><h4>El turno fue solicitado a las ${hora}, el ${dia}.</h4>`;
    document.write(imagen);
    datos = { 'credencial': credencial, 'dia': dia, 'hora': hora, 'profesion': objetivo, 'profesional': personal };
    const enJSON = JSON.stringify(datos);
    localStorage.setItem('Cliente', enJSON)
    
    // fetch('registros.json', {
    //     method: 'POST',
    //     body: JSON.stringify({title: `cliente`,
    //     body: `${enJSON}`,
    // }),
    // headers: {
    //     'Contnent-type': 'application/json;charset=UTF-8',
    // },
    // })
    // .then((response) => response.json())
    // .then((data) => console.log(data));

    }
}

fetch('registros.json')
.then((response) => response.json())
.then((data) => console.log(data));

console.log(fetch('registros.json'));

function fail () {
    document.write(`<center><h1>Swiss Medical Caballito</h1><br /></center>`);
    document.write(`<center><h2>Ticket del Centro Odontológico</h2><br /><h3>Por favor. Le solicitamos que recarge la página para tramitar su turno. Muchas gracias.</h3></center>`);
}


// const argv = require('yargs').argv;
const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear Tarea');
        break;

    case 'listar':
        console.log('Listar Tarea');
        break;

    case 'actualizar':
        console.log('Actualizar Tarea');
        break;

    default:
        console.log('Comando no es reconocido.');

}
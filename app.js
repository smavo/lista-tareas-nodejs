// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
//console.log(argv);

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
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
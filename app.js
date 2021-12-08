const colors = require('colors');
const { argv } = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

console.log(argv);

//const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log(nombreArchivo.america, 'creado'))
   .catch( err => console.log(err));

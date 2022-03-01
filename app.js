// const { argv } = require('yargs');
const argv = require('./yargs/yargs');
const { crearArchivo  }= require('./helpers/multiplicar')


// console.log(process.argv);
// console.log(argv);
// console.log(argv.b);
// const base = 3;
// ... --bases= 5
// console.log(process.argv);
// const [,, arg3 = "base = 5"] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(argv.b, argv.l);
crearArchivo( argv.b , argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch (err => console.log(err));

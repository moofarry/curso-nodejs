const os = require('node:os');


console.log( "Plataforma: " + os.platform() )
console.log( "Versión del sistema operativo: " + os.release() )
console.log('Memoria total: ' + os.totalmem() / 1024 / 1024 + 'MB');
console.log( "Memoria libre: " + os.freemem()/1024 /1024 + " MB" )
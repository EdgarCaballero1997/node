const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
// Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser:
let readConsole = (callback) => {
    let user = {
        name: '',
        surname: '',
        age: 0
    }
// Esta función debe preguntar por consola por el name, surname y age del usuario.
    rl.question('¿Cuál es tu nombre? ', (respuesta) => {
        user.name = respuesta;
        rl.question('Cual es tu apellido? ', (respuesta2) => {
            user.surname = respuesta2
            rl.question('Cuál es tu edad? ', (respuesta3) => {
                user.age = respuesta3;
                rl.close();
                callback(user);
            })
        })
    })
}
// Aplicarle la callback recibida como parámetro de entrada de readConsole.
// readConsole((user) => {
//     console.log('Datos del usuario: ', user);
// });
module.exports = {
    readConsole
}
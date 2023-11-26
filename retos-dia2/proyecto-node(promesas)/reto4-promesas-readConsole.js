const readline = require('readline');
// RETO 4

// ASYNC/AWAIT
const rl = readline.createInterface(process.stdin, process.stdout);
let question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
};
let readConsole = async () => {
    try{
        let user = {
            name: await question('¿Cuál es tu nombre? '),
            surname: await question('¿Cuál es tu apellido? '),
            age: await question('¿Cuál es tu edad? ')
        };
        rl.close();
        return user;
    }catch(error){
        console.error(error);
    }
};
let main = async () => {
    let user = await readConsole();
    console.log(user);
};
// THEN/CATCH
// let readConsole = () => {
//     return new Promise((resolve) => {
//         let user = {
//             name: '',
//             surname: '',
//             age: 0
//         };
//         rl.question('¿Cuál es tu nombre? ', (respuesta) => {
//             user.name = respuesta;
//             rl.question('¿Cuál es tu apellido? ', (respuesta2) => {
//                 user.surname = respuesta2;
//                 rl.question('¿Cuál es tu edad? ', (respuesta3) => {
//                     user.age = respuesta3;
//                     rl.close();
//                     resolve(user);
//                 });
//             });
//         });
//     });
// };
// readConsole()
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
module.exports = {
    readConsole
}
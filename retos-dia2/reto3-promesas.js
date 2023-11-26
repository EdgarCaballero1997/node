const fs = require('fs').promises;
const readline = require('readline');
// RETO 3 (PROMESAS)

// NOTA PARA EL PROFESOR: Para poder comprobar las promesas async/await primero
// tendrás que comentar el código referente a las promesas then/catch, y viceversa.

// ASYNC/AWAIT
let rl = readline.createInterface(process.stdin, process.stdout);
let question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
};
// let obtenerRespuestas = async () => {
//     let personObject = {
//         name: '',
//         surname: '',
//         age: 0
//     };
//     personObject.name = await question('Introduzca su nombre: ');
//     personObject.surname = await question('Introduzca su apellido: ');
//     personObject.age = await question('Introduzca su edad: ');
//     rl.close();
//     return personObject;
// };
// let mostrarObjeto = async () => {
//     try{
//         let personObject = await obtenerRespuestas();
//         let jsonData = JSON.stringify(personObject);
//         fs.writeFile('./archivo-reto3a-a.json', jsonData);
//         let data = await fs.readFile('./archivo-reto3a-a.json', 'utf-8');
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// };
// mostrarObjeto();

// THEN/CATCH
let obtenerRespuestas = () => {
    let personObject = {
        name: '',
        surname: '',
        age: 0
    };
    return question('Introduzca su nombre: ')
        .then((respuesta) => {
            personObject.name = respuesta;
            return question('Introduzca su apellido: ');
        })
        .then((respuesta) => {
            personObject.surname = respuesta;
            return question('Introduzca su edad: ');
        })
        .then((respuesta) => {
            personObject.age = respuesta;
            rl.close();
            return personObject;
        });
};
let mostrarObjeto = () => {
    obtenerRespuestas()
        .then((personObject) => {
            const jsonData = JSON.stringify(personObject);
            return fs.writeFile('./archivo-reto3t-c.json', jsonData);
        })
        .then(() => fs.readFile('./archivo-reto3t-c.json', 'utf-8'))
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
};
mostrarObjeto();
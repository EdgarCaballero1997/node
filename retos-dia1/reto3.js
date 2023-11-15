const readline = require('readline');
const fs = require('fs')
// RETO 3
let rl = readline.createInterface(process.stdin, process.stdout);
// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
let personObject = {
    name: '',
    surname: '',
    age: 0
}
rl.question('Introduzca su nombre: ', (respuesta) => {
    personObject.name = respuesta;
    rl.question('introduzca su apeliido: ', (respuesta2) => {
        personObject.surname = respuesta2;
        rl.question('Introduzca su edad: ', (respuesta3) => {
            personObject.age = respuesta3;
            rl.close();
            mostrarObjeto();
        })
    })
})
// Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
let mostrarObjeto = () => {
    let jsonData = JSON.stringify(personObject);
    fs.writeFile('./archivo-reto3.json', jsonData, (error) => {
        if(error){
            throw error;
        }fs.readFile('./archivo-reto3.json', 'utf-8', (err, data) => {
            if(err){
                throw err;
            }else{
                console.log(data);
            }
        })
    });
}



// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// Este ejercicio debe hacerse en una única ejecución de JavaScript

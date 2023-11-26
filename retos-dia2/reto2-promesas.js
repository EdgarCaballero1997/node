const fs = require("fs")
// RETO 2 (PROMESAS)

// Async/Await:
let object = {
    name: "Edgar",
    surname: "Caballero",
    age: 26
};
let persona = async () => {
    let datosJson = JSON.stringify(object);
    await fs.promises.writeFile('./reto-promesas.json', datosJson);
    let lectura = await fs.promises.readFile('./reto-promesas.json', 'utf-8');
    console.log(lectura);
}
persona();
// Then/Catch:
let promesaEjemplo = () => {
    return fs.promises.writeFile('promesa-thenCatch.json', JSON.stringify(object))
        .then(() => fs.promises.readFile('./promesa-thenCatch.json', 'utf-8'));
}
promesaEjemplo()
    .then((datos) => {
        console.log(datos);
    })
    .catch((error) => {
        console.log(error);
    });
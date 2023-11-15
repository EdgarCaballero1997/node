const fs = require("fs");
// RETO 2

// Crea un objeto con las siguientes propiedades: name, surname, age.
let object = {
    name: "Edgar",
    surname: "Caballero",
    age: 26
};
// Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
let personas = () => {
    let jsonData = JSON.stringify(object);
    fs.writeFile("./archivo.json", jsonData, (error) => {
        if(error){
            throw error;
        }fs.readFile("./archivo.json", "utf-8", (err, data) => {
            if(err){
                throw err
            }
            console.log(data);
        })
    });
}
personas();
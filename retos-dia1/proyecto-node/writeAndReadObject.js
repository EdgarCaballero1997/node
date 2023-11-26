const fs = require('fs');
// RETO 4

// La cabecera de la función debe ser "writeAndRead(path, object)".
let writeAndRead = (path, object) => {
// En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal
// guardado en el parámetro obj.
    let jsonData = JSON.stringify(object)
    fs.writeFile(path, jsonData, (error) => {
        if(error){
            throw error;
        }fs.readFile(path, 'utf-8', (err, data) => {
            if(err){
                throw err;
            }
            console.log(data);
        })
    })
// Y luego leer dicho fichero y mostrarlo por consola.
}
// writeAndRead('./miFichero.json', {calle: 'Teruel', numero: 8});
module.exports = {
    writeAndRead
}
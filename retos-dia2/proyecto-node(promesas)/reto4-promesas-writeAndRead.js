const fs = require('fs').promises;
// RETO 4

// ASYNC/AWAIT
let writeAndRead = async (path, object) => {
    fs.promises.writeFile(path, JSON.stringify(object), (error) => {
        if(error){
            throw error;
        }fs.promises.readFile(path, 'utf-8', (err, data) => {
            if(err){
                throw err;
            }
            console.log(data);
        })
    })
}
// THEN/CATCH
// let writeAndRead = (path, object) => {
//     fs.promises.writeFile(path, JSON.stringify(object))
//         .then(() => fs.promises.readFile(path, 'utf-8'))
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// };
module.exports = {
    writeAndRead
}
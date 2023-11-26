// Esto código gestiona los errores que puedan ocurrir en
// la comunicación cliente-servidor.
let errorHandling = (err, req, res, next) => {
    res.status(500).json({message: err.message})
}
module.exports = errorHandling;
const express = require('express');
const router = express.Router();
// Este código define las rutas
router.get('/', (request, response) => {
    response.status(200).json({ok: true, mensaje: 'Recibido!'});
});
router.get('/bye', (request, response) => {
    response.status(200).json({ok: true, mensaje: 'Adios!'});
});
module.exports = router;

// Las funciones que se usan en 'user.routers.js' empiezan con 'app.get' o 'router.get'.
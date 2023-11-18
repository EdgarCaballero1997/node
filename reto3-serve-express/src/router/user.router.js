const express = require('express');
const userCtrl = require('../controller/user.controller');
const userRouter = express.Router();

userRouter.get('/books', userCtrl.obtenerLibroPorId);
userRouter.get('/books', userCtrl.obtenerTodosLosLibros);
userRouter.post('/books', userCtrl.nuevoLibro);
userRouter.put('/books', userCtrl.modificarLibro);
userRouter.delete('/books', userCtrl.borrarLibro);

module.exports = userRouter;

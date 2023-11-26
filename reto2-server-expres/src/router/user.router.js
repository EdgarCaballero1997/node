const express = require('express');
const userCtrl = require('../controller/user.controller');
const userRouter = express.Router();

userRouter.get('/book', userCtrl.obtenerLibro);
userRouter.post('/book', userCtrl.nuevoLibro);
userRouter.put('/book', userCtrl.modificarLibro);
userRouter.delete('/book', userCtrl.borrarLibro);

module.exports = userRouter;
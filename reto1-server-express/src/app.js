// Importación de módulos
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const userRoutes = require('./routers/user.routers');
// Middleware
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(userRoutes);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
// app.use(errorHandling);
app.use((req, res, next) => {
    console.log('Petición recibida del cliente');
    next();
});
app.use((req, res, next) => {
    console.log(`URL: ${req.url},
                Metodo: ${req.method},
                User-Agent: ${req.get('User-Agent')}`);
    next();
});
module.exports = app;

// Las funciones que se usan en 'app.js' son las 'middleware' y empuezan con 'app.use'.
const app = require('./app');
// Este código pone en marcha al servidor
app.listen(app.get('port'), function(){
    console.log(`Server listen on port ${app.get('port')}`)
});

// En el archivo 'apiRest.js' se introducen las funciones que comienzan con 'app.listen'.
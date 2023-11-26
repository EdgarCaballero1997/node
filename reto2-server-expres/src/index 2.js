const express = require('express');
const cors = require('cors');
const app = express();
const Book = require('./models/book')

// Middleware. Archivo: "app.js"
app.use(cors);
app.use(express.json());

// Datos de ejemplo de la clase Book
let libro1 = new Book('Harry Potter', 'J. K. Rowling', 'Fantasy');

// Endpoints
// Endpoint para obtener libro:
app.get('/book', (request, response) => {
    response.json(libro1)
});
// Endpoint para crear un nuevo libro:
app.post('/book', (request, response) => {
    let {title, author, genre} = request.body;
    libro1 = new Book(title, author, genre);
    response.json(libro1);
});
// Endpoint para modificar los datos de un libro:
app.put('/book', (request, response) => {
    let {title, author, genre} = request.body;
    libro1.title = title || libro1.title;
    libro1.author = author || libro1.author;
    libro1.genre = genre || libro1.genre;
    response.json(libro1);
});
// Endpoint para borrar un libro:
app.delete('/book', (request, response) => {
    libro1 = null;
    response.json(libro1)
});

// Iniciar el ervidor
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});
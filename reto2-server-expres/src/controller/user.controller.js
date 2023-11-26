const Book = require('../models/book');

let libro1 = new Book('Harry Potter', 'J. K. Rowling', 'Fantasy');

let obtenerLibro = (request, response) => {
  response.json(libro1);
}

let nuevoLibro = (request, response) => {
  let { title, author, genre } = request.body;
  libro1 = new Book(title, author, genre);
  response.json(libro1);
}

let modificarLibro = (request, response) => {
  let { title, author, genre } = request.body;
  libro1.title = title || libro1.title;
  libro1.author = author || libro1.author;
  libro1.genre = genre || libro1.genre;
  response.json(libro1);
}

let borrarLibro = (request, response) => {
  libro1 = null;
  response.json(libro1);
}

module.exports = {
  obtenerLibro,
  nuevoLibro,
  modificarLibro,
  borrarLibro
};
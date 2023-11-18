const Book = require('../models/book');

let books = [
  new Book('Harry Potter', 'J. K. Rowling', 'Fantasy'),
  new Book('The Hobbit', 'J. R. R. Tolkien', 'Fantasy - Adventure'),
];

let obtenerLibroPorId = (request, response) => {
  let {id} = request.query;
  let libro = books.find((book) => book.id === parseInt(id, 10));
  if(libro){
    response.json(libro);
  }else{
    response.status(404).json({message: 'Libro no encontrado'});
  }
};

let obtenerTodosLosLibros = (request, response) => {
  response.json(books);
};

let nuevoLibro = (request, response) => {
  let {title, author, genre} = request.body;
  let nuevoLibro = new Book(title, author, genre);
  books.push(nuevoLibro);
  response.json(nuevoLibro);
};

let modificarLibro = (request, response) => {
  let {id} = request.query;
  let {title, author, genre} = request.body;
  let libro = books.find((book) => book.id === parseInt(id, 10));
  if(libro){
    libro.title = title || libro.title;
    libro.author = author || libro.author;
    libro.genre = genre || libro.genre;
    response.json(libro);
  }else{
    response.status(404).json({message: 'Libro no encontrado'});
  }
};

let borrarLibro = (request, response) => {
  let {id} = request.query;
  let libroIndex = books.findIndex((book) => book.id === parseInt(id, 10));
  if(libroIndex !== -1){
    const libroEliminado = books.splice(libroIndex, 1)[0];
    response.json(libroEliminado);
  }else{
    response.status(404).json({message: 'Libro no encontrado'});
  }
};

module.exports = {
  obtenerLibroPorId,
  obtenerTodosLosLibros,
  nuevoLibro,
  modificarLibro,
  borrarLibro,
};
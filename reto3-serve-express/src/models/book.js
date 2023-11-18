class Book {
    static lastId = 0;
  
    constructor(title, author, genre) {
      this.id = ++Book.lastId;
      this.title = title;
      this.author = author;
      this.genre = genre;
    }
  }

module.exports = Book;
  
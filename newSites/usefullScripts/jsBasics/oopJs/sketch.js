// let book = {
//   name: 'Ada adore',
//   prei: 12.90,
//   author: 'Vladimir Nabokov',
//   isbn: '99213989812',
//   printDescription: function(){
//     console.log(this.author + ' : ' + this.name);
//   }
// }

// console.log(book.name);
// console.log(book.author);

// book.printDescription();

// let book = {
//   name: 'Ada adore',
//   preis: 12.90,
//   author: 'Vladimir Nabokov',
//   isbn: '99213989812',
//   printDescription: function(){
//     console.log(this.author + ' : ' + this.name);
//   }
// }

// console.log(book.name);
// console.log(book.author);

// book.printDescription();

class Book {
  constructor(name, author, preis, isbn){
    this.name = name;
    this.author = author;
    this.preis = preis;
    this.isbn = isbn;
  }
  printDescription(){
    console.log(this.author + ' : ' + this.name);
  }
}

// function Book(name, author, preis, isbn){
//   this.name = name;
//   this.author = author;
//   this.preis = preis;
//   this.isbn = isbn;
//   this.printDescription = function(){
//   console.log(this.author + ' : ' + this.name);
//   }
// }

var book = new Book(
  'Ada Adore', 'Vladimir Nabokov', 29,90, '808123081ß'
)
var book2 = new Book(
  'Pale Fire', 'Vladimir Nabokov', 26,90, '8011823081ß'
)

// console.log(Book.prototype);
// console.log(book.__proto__);
console.log(Object.getPrototypeOf(book));
console.log(book.constructor);

console.log(typeof book);
console.log(book instanceof Book);
// Array that will hold the books
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, year, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.genre = genre;
}

// Function to add a book object to the array
function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}


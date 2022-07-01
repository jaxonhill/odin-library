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

// Make sure we have the card container grid and add button in the JS
cardContainer = document.querySelector('.card-container');
addButton = document.querySelector('.add-btn');

// Add a click event listener so we can pop up the form
addButton.addEventListener('click', {});

// TODO: NEED TO ADD A MODAL FORM WHEN YOU CLICK THE ADD BTN

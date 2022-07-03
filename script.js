// Array that will hold the books
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, year, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.genre = genre;
    this.hasRead = false;
}

// Function to add a book object to the array
function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

// Make sure we have the card container grid and add button in the JS
const cardContainer = document.querySelector('.card-container');
const addButton = document.querySelector('[data-modal-target]');
const closeButton = document.querySelector('.x-btn');
const overlay = document.getElementById('overlay');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const yearInput = document.querySelector('#year');
const genreInput = document.querySelector('#genre');
const addBookButton = document.querySelector('#submit');

// Get mark as read and delete buttons
const markReadButton = document.querySelector('.mark');
const deleteButton = document.querySelector('.delete');

// Add a click event listener so we can pop up the form with add button
addButton.addEventListener('click', () => {
    const modal = document.querySelector(addButton.dataset.modalTarget);
    openModal(modal);
});

// Add a click event so we can close the form with the close button
closeButton.addEventListener('click', () => {
    const modal = closeButton.closest('.modal');
    closeModal(modal);
});

addBookButton.addEventListener('click', () => {
    console.log(titleInput.value);
    if (titleInput.value && authorInput.value) {
        let novel = new Book(titleInput.value, authorInput.value, pagesInput.value, yearInput.value, genreInput.value);
        // addBookToLibrary(newBook);
        // For each book object in the array, create a new card
        const card = document.createElement('div');
        card.classList.add('card');

        // Create and append the children elements needed for a card
        const h2 = document.createElement('h2');
        h2.textContent = novel.title;
        card.appendChild(h2);

        const pAuthor = document.createElement('p');
        pAuthor.innerHTML = `<strong>Author: </strong>${novel.author}`;
        card.appendChild(pAuthor);

        const pPages = document.createElement('p');
        pPages.innerHTML = `<strong>Pages: </strong>${novel.pages}`;
        card.appendChild(pPages);

        const pYear = document.createElement('p');
        pYear.innerHTML = `<strong>Year Published: </strong>${novel.year}`;
        card.appendChild(pYear);

        const pGenre = document.createElement('p');
        pGenre.innerHTML = `<strong>Genre: </strong>${novel.genre}`;
        card.appendChild(pGenre);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('btn-container');
        const markBtn = document.createElement('button');
        markBtn.textContent = 'Mark as Read';
        markBtn.classList.add('bot-btn');
        markBtn.classList.add('mark');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.classList.add('bot-btn');
        delBtn.classList.add('delete');

        buttonContainer.appendChild(markBtn);
        buttonContainer.appendChild(delBtn);

        card.appendChild(buttonContainer);

        // Finally append the card to the card container
        cardContainer.appendChild(card);

        // Clear the input fields
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        yearInput.value = '';
        genreInput.value = '';

        // Then close the modal
        const modal = closeButton.closest('.modal');
        closeModal(modal);
        addBookToLibrary(novel);
    } else {
        alert("You must enter a TITLE and an AUTHOR");
    }
});

myLibrary.forEach((novel) => {
    // For each book object in the array, create a new card
    const card = document.createElement('div');
    card.classList.add('card');

    // Create and append the children elements needed for a card
    const h2 = document.createElement('h2');
    h2.textContent = novel.title;
    card.appendChild(h2);

    const pAuthor = document.createElement('p');
    pAuthor.innerHTML = `<strong>Author: </strong>${novel.author}`;
    card.appendChild(pAuthor);

    const pPages = document.createElement('p');
    pPages.innerHTML = `<strong>Pages: </strong>${novel.pages}`;
    card.appendChild(pPages);

    const pYear = document.createElement('p');
    pYear.innerHTML = `<strong>Year Published: </strong>${novel.year}`;
    card.appendChild(pYear);

    const pGenre = document.createElement('p');
    pGenre.innerHTML = `<strong>Genre: </strong>${novel.genre}`;
    card.appendChild(pGenre);

    // Finally append the card to the card container
    cardContainer.appendChild(card);
});

// Function for opening the modal, it will ADD active to both modal and overlay
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Function for opening the modal, it will REMOVE active to both modal and overlay
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

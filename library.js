const library = [];
const button = document.getElementById('submit');
const tittleName = document.getElementById('tittle');
const authorName = document.getElementById('author');
const books = document.getElementsByClassName('book');
const bookContainer = document.getElementById('book-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const errorBox = document.getElementById('error-message');
let boxValue = '';

function BookBuilder(tittle, author, process) {
  this.tittle = tittle;
  this.author = author;
  this.process = process;
}

function AddBook(book) {
  library.push(book);
}

function creator(element) { // creates div for entry, adds it to main content div//
  const div = document.createElement('div');
  div.classList.add('book');
  bookContainer.appendChild(div);
  div.innerHTML = `${element.tittle}<br>${element.author}<br>${element.process}`;
  const xButton = document.createElement('button');
  xButton.textContent = 'x';
  xButton.classList.add('xbutton');
  xButton.addEventListener('click', (e) => {
    xButton.parentNode.remove();
  });
  div.appendChild(xButton);
}

button.addEventListener('click', (e) => { // creates object, resets information on camps and calls div creator function
  if (tittleName.value === '' || authorName.value === '' || boxValue === '') {
    errorBox.textContent = 'Please fill all camps';
    e.preventDefault();
  } else {
    const newBook = new BookBuilder(tittleName.value, authorName.value, boxValue);
    creator(newBook);
    errorBox.textContent = '';
    tittleName.value = '';
    authorName.value = '';
    e.preventDefault();
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const clickedCheckbox = event.target;
    boxValue = checkbox.value;

    checkboxes.forEach((checkbox) => {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  });
});

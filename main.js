// form modal open and close
const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-form')
const closeModal = document.querySelector('.close-form')

openModal.addEventListener('click', () => {
    modal.showModal()
})

closeModal.addEventListener('click', () => {
    modal.close()
})

// create array to hold book objects
let myLibrary = [];

// create book objects from form submission
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)
    myLibrary.push(obj)
    populateTable(myLibrary)
    form.reset()
    modal.close()
})

/**
 * updates the table with all of the book objects
 * @param {array} library array of book objects
 */
function populateTable(library) {
    let tableBody = document.querySelector('#table-body')
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
    }
    library.forEach(object => {
        let fr = document.createElement('tr')
        fr.innerHTML = `<td>${object.title}` +
        `<td>${object.author}` +
        `<td>${object.pages}` +
        `<td>${object.read}` +
        `<td><button class='button toggle' data-index='${library.indexOf(object)}'>toggle`;
        tableBody.appendChild(fr)
        let toggleBtn = document.querySelectorAll('.toggle')
        toggleBtn.forEach(btn => {
            btn.addEventListener('click', toggleRead)
        })
    })
}

function toggleRead(e){
    let index = e.target.dataset.index
    if (myLibrary[index].read === 'yes') {
        myLibrary[index].read = 'no'
    } else {
        myLibrary[index].read = 'yes'
    }
    populateTable(myLibrary)
}
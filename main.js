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
const read = document.querySelector('#read')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)
    obj.read = (read.checked) ? 'read' : 'not read'
    console.log(obj)
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
    library.forEach((object, index) => {
        let fr = document.createElement('tr')
        Object.keys(object).forEach(property => {
            let td = document.createElement('td')
            td.textContent = object[property]
            fr.appendChild(td)
        })
        fr.innerHTML += 
        `<td><button class='button toggle' 
        data-index='${library.indexOf(object)}'>toggle` +
        `<td><button class='button delete' 
        data-index='${library.indexOf(object)}'>&times`;
        tableBody.appendChild(fr)
        let toggleBtn = document.querySelectorAll('.toggle')
        toggleBtn.forEach(btn => {
            btn.addEventListener('click', toggleRead)
        })
        let deleteBtn = document.querySelectorAll('.delete')
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', deleteObj)
        })
    })
}

/**
 * toggles between yes and no for the Read? column and updates the table
 * @param {event object} e contains index data on current element in array
 */
function toggleRead(e){
    let index = e.target.dataset.index
    if (myLibrary[index].read === 'read') {
        myLibrary[index].read = 'not read'
    } else {
        myLibrary[index].read = 'read'
    }
    populateTable(myLibrary)
}

/**
 * deletes the element from the array and updates the table
 * @param {event object} e contains index data on current element in array
 */
function deleteObj(e){
    let index = e.target.dataset.index
    myLibrary.splice(index, 1)
    populateTable(myLibrary)
}
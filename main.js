const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-form')
const closeModal = document.querySelector('.close-form')

openModal.addEventListener('click', () => {
    modal.showModal()
})


closeModal.addEventListener('click', () => {
    modal.close()
})



const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)

    appendTable(obj)
    form.reset()
    modal.close()
})

function appendTable(data) {
    let tableBody = document.querySelector('#table-body')
    let fr = document.createElement('tr')
    fr.innerHTML = '<td>' + data.title +
    '<td>' + data.author +
    '<td>' + data.pages + 
    '<td>' + data.read;
    tableBody.appendChild(fr)
}


let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, read? ${read}`
    }
}



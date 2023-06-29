const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-form')
const closeModal = document.querySelector('.close-form')

openModal.addEventListener('click', () => {
    modal.showModal()
})


closeModal.addEventListener('click', () => {
    modal.close()
})


let myLibrary = [];
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd)
    myLibrary.push(obj)
    appendTable(myLibrary)
    form.reset()
    modal.close()
})

function appendTable(data) {
    let tableBody = document.querySelector('#table-body')
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
    }
    data.forEach(object => {
        let fr = document.createElement('tr')
        fr.innerHTML = '<td>' + object.title +
        '<td>' + object.author +
        '<td>' + object.pages + 
        '<td>' + object.read;
        tableBody.appendChild(fr)
    })
        
}
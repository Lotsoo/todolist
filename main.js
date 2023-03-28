let todo = document.getElementById('todo')

const add = () => {
    // ambil text dari inputan
    let newText = document.getElementById('new_text')
   
    // tambahkan list ke dalam ul
    
    let li = `<li>
                <span onclick='coret(this)'>${newText.value}</span>
                <span onclick='hapus(this)'>[X]</span>
                </li>`
    todo.insertAdjacentHTML('afterbegin', li)

    // kosongkan value
    newText.value = ''
}

const coret = (el) => {
    el.classList.toggle('coret')
    
}

const hapus = (el) => {
    el.parentElement.remove()
}

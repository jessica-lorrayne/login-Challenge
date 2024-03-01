const email = document.getElementById('email')
const errorMessage = document.getElementById('textEmail')
const button = document.getElementById('button')
const form = document.querySelector('.two')

form.addEventListener('submit', (e) => {
    console.log(email.value)
    e.preventDefault()
})

// button.addEventListener()


// console.log(email)
// console.log(errorMessage)
// console.log(button)
// console.log(form)
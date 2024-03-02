const email = document.getElementById('email')
const errorMessage = document.getElementById('textEmail')
const button = document.getElementById('button')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    if(email.value ==''){
        errorMessage.textContent = 'preencha o campo acima'
    }
    console.log(email.value)
    e.preventDefault()
})

if (email.value == '@gmail.com') {
    console.log("aprovado")
} else {
    console.log("nao aprovado")
}

// button.addEventListener()


// console.log(email)
// console.log(errorMessage)
// console.log(button)
// console.log(form)
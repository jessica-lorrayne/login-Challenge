const form = document.querySelector('form');
const bodyBlur = document.querySelector('body')
const email = document.getElementById('email');
const errorMessage = document.getElementById('textEmail');
const invalidEmail = document.getElementById('textError');
const button = document.getElementById('button');
const modal = document.getElementById('modal');
const buttonModal = document.getElementById('button_24')
const blurBody = document.getElementById('blur')


form.addEventListener('submit', (e) => {
    if (email.value.trim() === '') {
        errorMessage.textContent = 'Preencha o campo acima';
        
    } else {
        console.log(email.value);
    }
    e.preventDefault();
});

email.addEventListener("input", () => {
    if (!validationEmail(email.value)) {
        invalidEmail.textContent = `O formato corresponde a ex: "teste@gmail.com"`;
    } else {
        invalidEmail.textContent = "";
    }
});

button.addEventListener('click', () => {
    addOrRemoveClass();
});

function addOrRemoveClass() {
    if (validationEmail(email.value)) {
        email.classList.add('form_input');
        email.classList.remove('error');
        modal.style.display = 'block'
        blurBody.style.display = 'block'
    } else {
        email.classList.add('error');
        email.classList.remove('form_input');
    }
}

function validationEmail(emailValue) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(emailValue);
}

buttonModal.addEventListener('click', () => {
    modal.style.display = 'none';
    blurBody.style.display = 'none';
});

// button.addEventListener()


// console.log(email)
// console.log(errorMessage)
// console.log(button)
// console.log(form)
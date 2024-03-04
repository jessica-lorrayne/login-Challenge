const email = document.getElementById('email');
const errorMessage = document.getElementById('textEmail');
const button = document.getElementById('button');
const invalidEmail = document.getElementById('textError');
const form = document.querySelector('form');



form.addEventListener('submit', (e) => {
    if (email.value == '') {
        errorMessage.textContent = 'Preencha o campo acima';
    } else {
        console.log(email.value);
        
    }
    e.preventDefault();
});

email.addEventListener("keyup", () => {
    if (validationEmail(email.value) !== true) {
        invalidEmail.textContent = `O formato corresponde a ex: "teste@gmail.com"`;
    } else {
        invalidEmail.textContent = "";
    }
});

function validationEmail(emailValue) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(emailValue);
}

button.addEventListener('click', () => {
    addOrRemoveClass();
    return;
});

function addOrRemoveClass() {
    if (email.classList.contains('form_input') && !validationEmail(email.value)) {
        email.classList.add('error');
        email.classList.remove('form_input');
    } 
    else {
        email.classList.remove('error');
        email.classList.add('form_input');
    }
}

// button.addEventListener()


// console.log(email)
// console.log(errorMessage)
// console.log(button)
// console.log(form)
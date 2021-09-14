const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
}

// show input success message
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    isEmpty(username, isValidUsername);
    isEmpty(email, isValidEmail);

});
function isValidUsername(element) {
    return true;
}
function isValidEmail(element) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(element.value).toLocaleLowerCase());
}
function isEmpty(element, checkValid) {
    if (element.value === '') {
        showError(element, `${element.id}을/를 확인해 주세요!`);
    } else if (checkValid(element)) {
        showSuccess(element);
    }
}




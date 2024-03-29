// Form validation
const form = document.querySelector("#contact-us");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

form.addEventListener("submit", validateForm);

function validateForm() {
    event.preventDefault();

    nameError.style.display = checkLength(name.value, 0) ? "none" : "block";
    messageError.style.display = checkLength(message.value, 20) ? "none" : "block";
    emailError.style.display = validateEmail(email.value) ? "none" : "block";

}

function checkLength(value, length) {
    if(value.trim().length > length) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const mailFormat = /\S+@\S+\.\S+/;
    return mailFormat.test(email);
}
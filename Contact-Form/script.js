const form = document.querySelector('form')
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email-address');
const message = document.querySelector('#message');
const checkBox = document.querySelector('#terms-condition');
const inputAll = document.querySelectorAll('input');
const radioQuery = document.querySelectorAll('li input');
const allWarningMsg = document.querySelectorAll('.notif');
const CompletedMsg = document.querySelector('.template');
const submit_btn = document.querySelector("button")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs();

    if (!checkInputs()) {
        return;
    } else {
        showCompletedMsg();
        setTimeout(function () {
        removeMsg();
        window.location.reload();
    }, 2000);
    return false;
    }
})

let checkInputs = () => {
    const firstNameText = firstName.value.trim();
    const lastNameText = lastName.value.trim();
    const emailText = email.value.trim();
    const messageText = message.value.trim();
    const selected = false;

    if (!firstNameText) {
        errorMsg(firstName, "First name is missing!");
    } else {
        completeMsg(firstName);
    }

    if (!lastNameText) {
        errorMsg(lastName, "Last name is missing!");
    } else {
        completeMsg(lastName);
    }

    if (!emailText) {
        errorMsg(email, "Email adress is missing!");
    } else {
        completeMsg(email)
    }

    for (let i = 0; i < radioQuery.length; i++) {
        if (radioQuery[i].checked) {
            selected = True;
            break;
        }
    }

    if (!selected) {
        const radioError = document.querySelector("#radio-notif");
        radioError.innerHTML = "Please select at least one query!";
    } else {
        const radioError = document.querySelector("#radio-notif");
        radioError.innerHTML = "";
    }

    if (!messageText) {
        errorMsg(message, "Please leave a message for us!");
    } else {
        completeMsg(message);
    }

    if (!checkBox.checked) {
        errorMsg(checkBox, "Please agree to our terms and condition!");
    } else {
        completeMsg(checkBox);
    }

}

const errorMsg = (element, message) => {
    element.classList.add("incomplete");

    const errorDisplay = element.parentElement.querySelector(".notif");
    errorDisplay.innerHTML = message;
}

const completeMsg = (element) => {
    element.classList.remove("incomplete")

    const errorDisplay = element.parentElement.querySelector(".notif");
    errorDisplay.innerHTML = "";
}

const showCompletedMsg = () => {
    CompletedMsg.innerHTML = `<div
      class="form-completed completed">
      <h2><img src="assets/images/icon-success-check.svg" alt="" />Message Sent!</h2>
      <p>Thanks for completing the form. We'll be in contact you within few days!</p>
      </div>`;
}

const removeMsg = () => completeMsg.remove();


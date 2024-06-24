const form = document.querySelector('form')
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email-address');
const message = document.querySelector('#message-content');
const checkBox = document.querySelector('#terms-condition');
const inputALl = document.querySelectorAll('input');
const radioQuery = document.querySelectorAll('li');
const allWarningMsg = document.querySelectorAll('.notif');
const CompletedMsg = document.querySelector('.form-completed');

const errorMsg = (element, message) => {
    const errorDisplay = element.parentElement.querySelector(".notif");

    errorDisplay.innertext = message;
    element.classlist.add("error");
    element.classlist.remove("success");
}

const completedMsg = (element) => {
    const errorDisplay = element.parentElement.querySelector;

    errorDisplay.innertext = "";
    element.classlist.add("completed");
    element.classlist.remove("error");
}

const checkInputs = () => {
    const firstNameChar = firstName.value.trim();
    const lastNameChar = lastName.value.trim();
    const emailChar = email.value.trim();
    const messageChar = message.value.trim();
    let selected = false;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!firstNameChar) {
        errorMsg(firstName, "First name is missing!");
        return;
    } else {
        completedMsg(firstName);
    }

    if (!lastNameChar) {
        errorMsg(lastName, "Last name is missing!");
        return;
    } else {
        completedMsg(lastName);
    }

    if (!emailChar) {
        errorMsg(email, "Email is missing!");
        return;
    } else {
        completedMsg(email);
    }

    for (let i = 0; i < radioQuery.length; i++) {
        if (radioQuery[i].checked) {
            selected = True;
            break;
        }
    }

    if (!selected) {
        document.querySelector("#radio-notif").innertext = "Select one of the query type!";
        return;
    } else {
        document.querySelector("radio-notif").innertext = "";
    }

    if (!messageChar) {
        errorMsg(message, "The message is required!");
        return;
    } else if (messageChar.length > 300) {
        errorMsg(message, "Message can't be longer than 300 characters.");
        return;
    } else {
        completedMsg(message);
    }

    if (!checkBox.checked) {
        document.querySelector("#terms-notif").innertext = "Please agree to our terms and conditions before submitting the form!";
        return;
    } else {
        completedMsg;
    }
}

const showCompletedMsg = () => {
    CompletedMsg.innerHTML = `<div
      class="form-completed completed">
      <h2><img src="assets/images/icon-success-check.svg" alt="" />Message Sent!</h2>
      <p>Thanks for completing the form. We'll be in contact you within few days!</p>
      </div>`;
}

const removeMsg = () => completedMsg.remove();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkInputs();

    if (!checkInputs()) {
        return;
    }

    showCompletedMsg();
    setTimeout(function () {
        removeMsg();
        window.location.reload();
    }, 2000);
    return false;
})


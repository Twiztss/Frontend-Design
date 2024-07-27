const notif = document.querySelector(".notif")
const input = document.querySelector("input")
const submit = document.querySelector("input[type = \"submit\"]")
const container_success = document.querySelector(".container-success")
const container = document.querySelector(".container")
const dismiss = document.querySelector("#dismiss")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.value == "") {
        notif.style.display = "block"
        input.classList.add("error")
    } else if (!input.value.includes("@") && !input.value.includes(".com")) {
        notif.style.display = "block"
        input.classList.add("error")
        notif.innerHTML = "Invalid Email"
        notif.style.marginLeft = "62.5%"
    } else {
        container.classList.add("inactive")
        container_success.classList.remove("inactive")
    }
})

dismiss.addEventListener("click", (e) => {
    e.preventDefault()
    container.classList.remove("inactive")
    container_success.classList.add("inactive")
    notif.style.display = "none"
    input.classList.remove("error")
    input.value = ""
})
const explore = document.querySelector(".planet")
const title = document.querySelector(".content .div h1")

explore.addEventListener("click", () => {
    // title.innerHTML = "Titan"
    explore.innerHTML = ""
    explore.classList.add("titan")
    setTimeout( () => {
        explore.classList.remove("titan")
        // title.innerHTML = "SPACE"
        explore.innerHTML = "Explore"
    },1000)
})


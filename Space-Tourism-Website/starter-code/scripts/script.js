// For testing querySelectors
const hamburger = document.querySelector("#hamburger")
const sidebar = document.querySelector(".sidebar")
const closeBtn = document.querySelector(".sidebar > img")

hamburger.addEventListener("click", () => {
    sidebar.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    sidebar.style.display = "none"
})


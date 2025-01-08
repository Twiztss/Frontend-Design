const close = document.querySelector(".close")
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const menu_bg = document.querySelector(".bg")

burger.addEventListener("click", () => {
    menu.setAttribute("style","display : flex")
    menu_bg.setAttribute("style","display : flex")
})

close.addEventListener("click", () => {
    menu.setAttribute("style","display : none")
    menu_bg.setAttribute("style","display : none")
})
const close = document.querySelector(".close")
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const menu_bg = document.querySelector(".bg")

function openMenu() {
    menu.setAttribute("style", "display: flex")
    menu_bg.setAttribute("style", "display: flex")
    burger.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
}

function closeMenu() {
    menu.setAttribute("style", "display: none")
    menu_bg.setAttribute("style", "display: none")
    burger.setAttribute("aria-expanded", "false")
    document.body.style.overflow = "auto"
}

burger.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)

// Close menu when clicking on background
menu_bg.addEventListener("click", closeMenu)

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu()
    }
})
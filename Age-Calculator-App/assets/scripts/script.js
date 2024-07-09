const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const notif = document.querySelector(".notif")
const calc_button = document.querySelector(".calc-btn")

console.log(day)
console.log(month)
console.log(year)

let dayValue = day.value
let monthValue = month.value
let yearValue = year.value

calc_button.addEventListener("click", () => {
    console.log("Hi")
    
    if (dayValue === "") {
        console.log("Day Missing!")
    } else {
        console.log(dayValue)
    }
    if (monthValue === "") {
        console.log("Month Missing!")
    } else {
        console.log(monthValue)
    }
    if (yearValue === "") {
        console.log("Year Missing!")
    } else {
        console.log(yearValue)
    }
})


const day = document.getElementsByTagName("input")[0]
const month = document.getElementsByTagName("input")[1]
const year = document.getElementsByTagName("input")[2]
const notif = document.querySelector(".notif")
const calc_button = document.querySelector(".calc-btn")

console.log(day)
console.log(month)
console.log(year)

calc_button.addEventListener("click", () => {

    let dayValue = day.value
    let monthValue = month.value
    let yearValue = year.value

    if (dayValue != "" && monthValue != "" && yearValue != "") {
        let result = calculate(dayValue, monthValue, yearValue)
        display(result,document.getElementsByTagName("span"))
    } else {
        if (dayValue === "") {
            displayError(day, "Day missing!")
        } else if (dayValue > 31 || dayValue <= 0 || Number(dayValue) === NaN) {
            displayError(day, "Invalid day!")
        } else {
            displayCompleted(day)
        }
        
        if (monthValue === "") {
            displayError(month, "Month missing!")
        } else if (monthValue > 12 || monthValue <= 0 || Number(monthValue) === NaN) {
            displayError(month, "Invalid month!")
        } else {
            displayCompleted(month)
        }

        if (yearValue === "") {
            displayError(year, "Year missing!")
        } else if (yearValue < 0) {
            displayError(year, "Invalid year!")
        } else {
            displayCompleted(year)
        }
    }
})

let displayError = (elem, message) => {
    elem.classList.add("active")
    elem_sel = elem.parentElement.querySelector(".notif")
    tag_sel = elem.parentElement.querySelector("h6")
    
    tag_sel.style.color = "red"
    elem_sel.innerHTML = message
}

let displayCompleted = (elem) => {
    elem.classList.remove("active")
    elem_sel = elem.parentElement.querySelector(".notif")
    tag_sel = elem.parentElement.querySelector("h6")

    tag_sel.style.color = "var(--Light-gray)"
    elem_sel.innerHTML = ""
}

let calculate = (day, month, year) => {

    let currentDate = new Date()
    let dayDiff = currentDate.getDate() - day
    let monthDiff = currentDate.getMonth() - month
    let yearDiff = currentDate.getFullYear() - year

    if (dayDiff < 0) {
        monthDiff -= 1
        dayDiff += 30
    } else if (monthDiff < 0) {
        yearDiff -= 1
        monthDiff += 12
    }

    if (monthDiff < 0) {
        yearDiff -= 1
        monthDiff += 12
    }

    if (dayDiff == NaN || monthDiff == NaN || monthDiff == NaN) {
        return ["--","--","--"]
    }

    let result = [dayDiff, monthDiff, yearDiff]

    console.log("Day : ",dayDiff)
    console.log("Month : ", monthDiff)
    console.log("Year : ", yearDiff)

    return result
}

let display = (result, elem) => {
    elem[0].innerHTML = result[2]
    elem[1].innerHTML = result[1]
    elem[2].innerHTML = result[0]
}

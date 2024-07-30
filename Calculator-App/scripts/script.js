const number_btn = document.querySelectorAll("button:not(#operator):not(#reset):not(#delete):not(#equal)")
const operator_btn = document.querySelectorAll("#operator")
const reset = document.querySelector("#reset")
const del = document.querySelector("#delete")
const equal = document.querySelector("#equal")
const display = document.querySelector(".display")
const slider = document.querySelector(".slider")
const theme = document.querySelectorAll("input[type = \"radio\"]")

let n0, n1, n2, result
let operator = ""
let operatorSet = false

const themes = [{
    // Theme 1
    BackgroundMain : "hsl(222, 26%, 31%)",
    BackgroundButtonGroup : "hsl(223, 31%, 20%)",
    BackgroundDisplay : "hsl(224, 36%, 15%)",

    BackgroundSpecialButton: "hsl(225, 21%, 49%)",
    BackgroundSpecialButtonShadow : "hsl(224, 28%, 35%)",

    RedToggleButton : "hsl(6, 63%, 50%)",
    DarkToggleButtonShadow : "hsl(6, 70%, 34%)",

    BackgroundNormalButton : "hsl(30, 25%, 89%)",
    BackgroundNormalButtonShadow : "hsl(28, 16%, 65%)",

    TextButton: "hsl(221, 14%, 31%)",
    SpecialText: "hsl(0, 0%, 100%)",
},
{
    // Theme 2
    BackgroundMain : "hsl(0, 0%, 90%)",
    BackgroundButtonGroup : "hsl(0, 5%, 81%)",
    BackgroundDisplay : "hsl(0, 0%, 93%)",

    BackgroundSpecialButton: "hsl(185, 42%, 37%)",
    BackgroundSpecialButtonShadow : "hsl(185, 58%, 25%)",

    RedToggleButton : "hsl(25, 98%, 40%)",
    DarkToggleButtonShadow : "hsl(25, 99%, 27%)",

    BackgroundNormalButton : "hsl(45, 7%, 89%)",
    BackgroundNormalButtonShadow : "hsl(28, 16%, 65%)",

    TextButton: "hsl(60, 10%, 19%)",
    SpecialText: "hsl(60, 10%, 19%)",
},
{   
    // Theme 3
    BackgroundMain : "hsl(268, 75%, 9%)",
    BackgroundButtonGroup : "hsl(268, 71%, 12%)",
    BackgroundDisplay : "hsl(268, 71%, 12%)",

    BackgroundSpecialButton: "hsl(281, 89%, 26%)",
    BackgroundSpecialButtonShadow : "hsl(285, 91%, 52%)",

    RedToggleButton : "hsl(176, 100%, 44%)",
    DarkToggleButtonShadow : "hsl(177, 92%, 70%)",

    BackgroundNormalButton : "hsl(268, 47%, 21%)",
    BackgroundNormalButtonShadow : "hsl(290, 70%, 36%)",

    TextButton: "hsl(52, 100%, 62%)",
    SpecialText: "hsl(52, 100%, 62%)",
},]

// Destructuring Themes
const [theme1, theme2, theme3] = themes

// Defining Properties
properties = ["--Background-Main", "--Background-Button-Group", "--Background-Display", "--Background-Special-Button", 
    "--Background-Special-Button-Shadow", "--Red-Toggle-Button", "--Dark-Toggle-Button-Shadow", 
    "--Background-Normal-Button", "--Background-Normal-Button-Shadow", "--Text-Button", "--Special-Text"]

// onClick function for theme
for (let i = 0; i < theme.length; i++) {
    theme[i].addEventListener("change", () => {
        for (let j = 0; j < theme.length; j++) {
            theme[j].checked = false
        }
        theme[i].checked = true
        themeCheck(i)
        slider.style.margin = String((i * 25) + 5) + "px"
    })
}

// onClick function for number button
for (let i = 0; i < number_btn.length; i++) {
    number_btn[i].addEventListener("click", () => {
        let number = number_btn[i].innerHTML
        if (operatorSet) {
            n1 = display.innerHTML
            display.innerHTML = number
            operatorSet = false
        } else if (display.innerHTML == "0") {
            display.innerHTML = number
            isInitial = false
        } else {
            display.innerHTML += number
        }
    })
}

// onClick for delete button
del.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0,-1)
    if (display.innerHTML.length == 0) {
        display.innerHTML = 0
    }
})

// onClick for reset button
reset.addEventListener("click", () => {
    display.innerHTML = 0
    n1, n2 = 0
})

// onClick for equal button
equal.addEventListener("click", () => {
    n1 = parseFloat(n1)
    n2 = parseFloat(display.innerHTML)

    if (n2 === result) {
        n1 = n2
        n2 = n0
    } else {
        n2 = parseFloat(display.innerHTML)
    }

    result = calculate(n1, n2, operator)
    display.innerHTML = result

    n0 = n2
    n1 = n2
    n2 = result
    operatorSet = false
});

// onClick for operator
for (let i = 0; i < operator_btn.length; i++) {
    operator_btn[i].addEventListener("click", (e) => {
        console.log(e.target.innerHTML)
        switch(e.target.innerHTML) {
            case "+" :
                operator = "+"
                operatorSet = true
                break
            case "-" :
                operator = "-"
                operatorSet = true
                break
            case "x" :
                operator = "*"
                operatorSet = true
                break
            case "/" :
                operator = "/"
                operatorSet = true
                break
        } 
    })
}

// Calculate
const calculate = (n1,n2, operator) => {
    if (typeof operator === "undefined") {
        console.error("Error: Operator is undefined");
        display.innerHTML = "Error : Invalid Operator"
        setTimeout(() => {display.innerHTML = 0}, 1000)
        return;
    }

    switch(operator) {
        case "+" :
            return add(n1,n2)
        case "-" :
            return subtract(n1,n2)
        case "*" :
            return multiply(n1,n2)
        case "/" :
            return divide(n1,n2)
    }
}

// Operations
const add = (n1,n2) => Number(n1) + Number(n2)
const subtract = (n1,n2) => Number(n1) - Number(n2)
const multiply = (n1,n2) => Number(n1) * Number(n2)
const divide = (n1,n2) => Number(n1) / Number(n2)

// Check and apply themes
const themeCheck = (id) => {
    switch(id) {
        case 0 :
            applyTheme(properties,theme1)
            break
        case 1 :
            applyTheme(properties, theme2)
            break
        case 2 :
            applyTheme(properties, theme3)
            break
    }
}

// Apply themes
const applyTheme = (property, theme) => {
    for (let i = 0; i < property.length; i++) {
        document.documentElement.style.setProperty(property[i], theme[Object.keys(theme)[i]])
    }
}

let MenuList = [
    {
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50,
       amount : 0
    },
    {
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00,
        amount : 0
     },
     {
        name: "Macaron Mix of Five",
        category: "Macaron",
        price : 8.00,
        amount : 0
     },
     {
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50,
        amount : 0
     },
     {
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00,
        amount : 0
     },
     {
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00,
        amount : 0
     },
     {
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50,
        amount : 0
     },
     {
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50,
        amount : 0
     },
     {
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50,
        amount : 0
     }
]

const btn = document.getElementsByClassName("add-cart-btn")
const cartContent = document.querySelector(".cart-content")
const emptyCart = document.querySelector(".empty-cart")

let total = MenuList.reduce((prev, cur) => prev + cur.price * cur.amount, 0)

for (let i = 1; i < btn.length; i++) {
   btn[i].addEventListener("click", (e) => {
      console.log(cartContent.childNodes)
      const { name } = e.target
      MenuList = MenuList.map((item) => {
         if (name == item.category) {
               newItem = {...item, amount : item.amount + 1}
               const cartList = createCartList(item)

               isEmpty()

               cartContent.appendChild(cartList)
               return newItem
         } else {
            return item
         }
      })
   })
}

const createCartList = (item) => {
   const cartList = createElementWithClass("div", "cart-list")

   cartList.setAttribute("name", item.name)

   const listText = createElementWithClass("div", "cart-list-text")
   const listStat = createElementWithClass("div", "cart-list-stat")

   const listTitle = createElementWithClass("p", "")
   const listAmount = createElementWithClass("p", "cart-list-amount")
   const listPrice = createElementWithClass("p", "cart-list-price")
   const listTotal = createElementWithClass("p", "cart-list-total")

   listTitle.textContent = item.name
   listAmount.textContent = "x" + item.amount
   listPrice.textContent = "@" + (item.price)
   listTotal.textContent = "$" + (item.price * item.amount)

   listStat.appendChild(listAmount)
   listStat.appendChild(listPrice)
   listStat.appendChild(listTotal)

   listText.appendChild(listTitle)
   listText.appendChild(listStat)

   cartList.appendChild(listText)

   return cartList
}

const createElementWithClass = (type="div", className) => {
   const element = document.createElement(type)

   if (className) {
      element.classList.add(className)
      return element
   } else {
      return element
   }

}

const isEmpty = () => {
   if (cartContent.childElementCount < 0) {
      emptyCart.style.display = "flex"
   } else {
      emptyCart.style.display = "none"
   }
}
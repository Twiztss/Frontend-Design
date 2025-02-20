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

let total = MenuList.reduce((prev, cur) => prev + cur.price * cur.amount, 0)

for (let i = 1; i < btn.length; i++) {
   btn[i].addEventListener("click", (e) => {
      const { name } = e.target
      MenuList = MenuList.map((item) => {
         if (name == item.category) {
               newItem = {...item, amount : item.amount + 1}
               return newItem
         } else {
            return item
         }
      })
   })
}
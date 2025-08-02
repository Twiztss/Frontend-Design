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
const cartTitle = document.getElementById("cart-title")
const confirmOrderBtn = document.getElementById("confirm-order-btn")
const modal = document.getElementById("order-modal")
const modalClose = document.querySelector(".modal-close")

const updateCartDisplay = () => {
   // Clear cart content
   cartContent.innerHTML = ""
   
   // Filter items with amount > 0
   const cartItems = MenuList.filter(item => item.amount > 0)
   
   if (cartItems.length === 0) {
      emptyCart.style.display = "flex"
      cartTitle.textContent = "Your cart (0)"
      confirmOrderBtn.style.display = "none"
   } else {
      emptyCart.style.display = "none"
      
      // Create cart items
      cartItems.forEach(item => {
         const cartList = createCartList(item)
         cartContent.appendChild(cartList)
      })
      
      // Add total
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.amount), 0)
      const totalElement = createElementWithClass("div", "cart-total")
      totalElement.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`
      cartContent.appendChild(totalElement)
      
      cartTitle.textContent = `Your cart (${cartItems.reduce((sum, item) => sum + item.amount, 0)})`
      confirmOrderBtn.style.display = "block"
   }
}

const updateProductButtons = () => {
   MenuList.forEach((item, index) => {
      const productCard = btn[index].closest('.product-card')
      const currentButton = btn[index]
      
      if (item.amount > 0) {
         // Replace add button with quantity controls
         if (!productCard.querySelector('.quantity-controls')) {
            const quantityControls = createQuantityControls(item.category, item.amount)
            currentButton.style.display = 'none'
            currentButton.parentNode.insertBefore(quantityControls, currentButton.nextSibling)
         } else {
            // Update existing quantity controls
            const quantityAmount = productCard.querySelector('.quantity-amount')
            if (quantityAmount) {
               quantityAmount.textContent = item.amount
            }
         }
      } else {
         // Show add button, remove quantity controls
         currentButton.style.display = 'flex'
         const quantityControls = productCard.querySelector('.quantity-controls')
         if (quantityControls) {
            quantityControls.remove()
         }
      }
   })
}

// Initialize cart display
updateCartDisplay()
updateProductButtons()

for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", (e) => {
      const { name } = e.target
      MenuList = MenuList.map((item) => {
         if (name == item.category) {
               return {...item, amount : item.amount + 1}
         } else {
            return item
         }
      })
      updateCartDisplay()
      updateProductButtons()
   })
}

const createQuantityControls = (category, amount) => {
   const controls = createElementWithClass("div", "quantity-controls")
   
   const decreaseBtn = createElementWithClass("button", "quantity-btn")
   decreaseBtn.innerHTML = '<img src="./assets/images/icon-decrement-quantity.svg" alt="Decrease quantity">'
   decreaseBtn.addEventListener('click', () => updateQuantity(category, -1))
   
   const amountSpan = createElementWithClass("span", "quantity-amount")
   amountSpan.textContent = amount
   
   const increaseBtn = createElementWithClass("button", "quantity-btn")
   increaseBtn.innerHTML = '<img src="./assets/images/icon-increment-quantity.svg" alt="Increase quantity">'
   increaseBtn.addEventListener('click', () => updateQuantity(category, 1))
   
   controls.appendChild(decreaseBtn)
   controls.appendChild(amountSpan)
   controls.appendChild(increaseBtn)
   
   return controls
}

const updateQuantity = (category, change) => {
   MenuList = MenuList.map((item) => {
      if (item.category === category) {
         const newAmount = Math.max(0, item.amount + change)
         return {...item, amount: newAmount}
      } else {
         return item
      }
   })
   updateCartDisplay()
   updateProductButtons()
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
   listPrice.textContent = "@" + item.price.toFixed(2)
   listTotal.textContent = "$" + (item.price * item.amount).toFixed(2)

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

// Modal functionality
confirmOrderBtn.addEventListener('click', () => {
   showOrderConfirmationModal()
})

modalClose.addEventListener('click', () => {
   modal.style.display = 'none'
})

// Close modal when clicking outside
window.addEventListener('click', (e) => {
   if (e.target === modal) {
      modal.style.display = 'none'
   }
})

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none'
   }
})

const showOrderConfirmationModal = () => {
   const orderItems = document.querySelector('.order-items')
   const totalAmount = document.querySelector('.total-amount')
   
   // Clear existing items
   orderItems.innerHTML = ''
   
   // Get cart items
   const cartItems = MenuList.filter(item => item.amount > 0)
   
   // Calculate total
   const total = cartItems.reduce((sum, item) => sum + (item.price * item.amount), 0)
   
   // Populate order items
   cartItems.forEach(item => {
      const orderItem = createOrderItem(item)
      orderItems.appendChild(orderItem)
   })
   
   // Update total
   totalAmount.textContent = `$${total.toFixed(2)}`
   
   // Show modal
   modal.style.display = 'block'
}

const createOrderItem = (item) => {
   const orderItem = createElementWithClass('div', 'order-item')
   
   // Get thumbnail image based on category
   const thumbnailSrc = getThumbnailImage(item.category)
   
   orderItem.innerHTML = `
      <img src="${thumbnailSrc}" alt="${item.name}" class="order-item-thumbnail">
      <div class="order-item-details">
         <p class="order-item-name">${item.name}</p>
         <p class="order-item-quantity">${item.amount}x @ $${item.price.toFixed(2)}</p>
      </div>
      <p class="order-item-price">$${(item.price * item.amount).toFixed(2)}</p>
   `
   
   return orderItem
}

const getThumbnailImage = (category) => {
   const imageMap = {
      'Waffle': './assets/images/image-waffle-thumbnail.jpg',
      'Crème Brûlée': './assets/images/image-creme-brulee-thumbnail.jpg',
      'Macaron': './assets/images/image-macaron-thumbnail.jpg',
      'Tiramisu': './assets/images/image-tiramisu-thumbnail.jpg',
      'Baklava': './assets/images/image-baklava-thumbnail.jpg',
      'Pie': './assets/images/image-meringue-thumbnail.jpg',
      'Cake': './assets/images/image-cake-thumbnail.jpg',
      'Brownie': './assets/images/image-brownie-thumbnail.jpg',
      'Panna Cotta': './assets/images/image-panna-cotta-thumbnail.jpg'
   }
   return imageMap[category] || './assets/images/image-waffle-thumbnail.jpg'
}

// Start New Order functionality
document.addEventListener('click', (e) => {
   if (e.target.classList.contains('start-new-order-btn')) {
      // Clear cart
      MenuList = MenuList.map(item => ({...item, amount: 0}))
      updateCartDisplay()
      updateProductButtons()
      
      // Close modal
      modal.style.display = 'none'
   }
})
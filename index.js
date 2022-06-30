const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const storeItemList = document.body.querySelector('.store--item-list')
const cartItemList = document.body.querySelector('.cart--item-list')
const stateItems = state.items
const stateCart = state.cart
const assetIcons = [
  "assets/icons/001-beetroot.svg",
  "assets/icons/002-carrot.svg",
  "assets/icons/003-apple.svg",
  "assets/icons/004-apricot.svg",
  "assets/icons/005-avocado.svg",
  "assets/icons/006-bananas.svg",
  "assets/icons/007-bell-pepper.svg",
  "assets/icons/008-berry.svg",
  "assets/icons/009-blueberry.svg",
  "assets/icons/010-eggplant.svg"
]


// Creating items in the store
function createAllStoreItems() {

  for(let i = 0; i < stateItems.length; i++) {

    const stateItemName = stateItems[i].name
    const itemImage = assetIcons[i]

    createStoreItem(stateItemName, itemImage)

  }

}

function createStoreItem(itemName, itemImage) {

  const storeItem = document.createElement('li')

  const storeItemDiv = document.createElement('div')
  storeItemDiv.className = "store--item-icon"
  storeItem.append(storeItemDiv)

  const storeItemImg = document.createElement('img')
  storeItemImg.className = "store-item-img"
  storeItemImg.src = itemImage
  storeItemImg.alt = itemName
  storeItemDiv.append(storeItemImg)

  const storeItemButton = document.createElement('button')
  storeItemButton.className = "store-item-button"
  storeItemButton.innerText = "Add to cart"
  storeItemButton.addEventListener('click', function (event){
    event.preventDefault()

    setCart(storeItemImg.alt, storeItemImg.src)
    
  })  
  storeItem.append(storeItemButton)

  storeItemList.append(storeItem)
}


// Adding items to the cart
function setCart(itemName, itemImage) {

  const itemPrice = (state.items.find((element) => element.name === itemName)).price

  const cartItem = {

    name: itemName,
    image: itemImage,
    quantity: 1,
    price: itemPrice

  }

  stateCart.push(cartItem)

  // console.log("cart has", state.cart)

  renderCart()
}


function renderCart() {

  cartItemList.innerHTML = ''

  state.cart.forEach(item => 
    
    createCartItem(item.name, item.image)

  )

}


function createCartItem(itemName, itemImage) {

  const cartItem = document.createElement('li')

  const cartItemImg = document.createElement('img')
  cartItemImg.className = "cart--item-icon"
  cartItemImg.src = itemImage
  cartItemImg.alt = itemName
  cartItem.append(cartItemImg)

  const cartItemName = document.createElement('p')
  cartItemName.innerText = itemName
  cartItem.append(cartItemName)

  const cartItemMinusButton = document.createElement('button')
  cartItemMinusButton.className = "quantity-btn remove-btn center"
  cartItemMinusButton.innerText = "-"
  cartItem.append(cartItemMinusButton)

  const cartItemSpan = document.createElement('span')
  cartItemSpan.className = "quantity-text center"
  cartItemSpan.innerText = "1"
  cartItem.append(cartItemSpan)

  const cartItemPlusButton = document.createElement('button')
  cartItemPlusButton.className = "quantity-btn add-btn center"
  cartItemPlusButton.innerText = "+"
  cartItem.append(cartItemPlusButton)

  cartItemList.appendChild(cartItem)
}


// function addToCart() {

//   const storeItemButton = document.body.querySelector('.store-item-button')
//   const storeItemImg = document.body.querySelector('.store-item-img')

//   storeItemButton.addEventListener('click', function (event){
//     event.preventDefault()

//     // const eventImg = event.target.previousElementSibling.firstChild

//     setCart(storeItemImg.alt, storeItemImg.src)
//   })

// }


createAllStoreItems()
renderCart()
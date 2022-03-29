// shopping cart
const cartItemContainer = document.querySelector(".cart-item");
const priceText = document.querySelector(".price");
const amountText = document.querySelector(".amount");

const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const removeButton = document.querySelector(".remove");

let jacketPrice = 1299.00;
let amountOfItems = 1;

addButton.addEventListener("click", addItem);
subtractButton.addEventListener("click", subtractItem);
removeButton.addEventListener("click", removeItem);

function addItem(){
    amountOfItems += 1;
    updateAmountAndSum();
}

function subtractItem(){
    amountOfItems -= 1;
    updateAmountAndSum();
}

function removeItem(){
    amountOfItems = 0;
    updateAmountAndSum();
}

function updateAmountAndSum(){
    if(amountOfItems == 0) {
        cartItemContainer.innerHTML = "<h1>No products in cart</h1>";
    }
    else {
        let price = amountOfItems * jacketPrice;
        priceText.innerHTML = price;
        amountText.innerHTML = amountOfItems;
    }
}
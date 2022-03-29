// Cart counter
const cart = document.querySelector(".cart-counter");
const cartBtn = document.querySelector(".add-to-cart");
let counter = 0;

cartBtn.addEventListener("click", cartCounter);

function cartCounter() {
    counter++;
    cart.style = counter == 0 ? "display: none" : "display: inline-block";
    cart.innerHTML = counter;
}
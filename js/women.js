const jacketsContainer = document.querySelector(".jackets");
const amountOfJackets = 12;

function createProductItems() {
    jacketsContainer.innerHTML = "";
    for (let i = 0; i < amountOfJackets; i++) {
        jacketsContainer.innerHTML += `
        <div class="product">
            <a href="productdetail.html">
                <img src="images/jacket.png" alt="Jacket example">
            </a>
            <p>Raincoat Long</p>
            <p>1 299 NOK</p>
            <button class="cta add-to-cart">Add to cart</button>
        </div>`
    }
}

createProductItems();

const cart = document.querySelector(".cart-counter");
const cartBtn = document.querySelectorAll(".add-to-cart");
let counter = 0;

for(let i = 0; i < cartBtn.length; i++){
    cartBtn[i].addEventListener("click", cartCounter);
}

function cartCounter() {
    counter++;
    cart.style = counter == 0 ? "display: none" : "display: inline-block";
    cart.innerHTML = counter;
}
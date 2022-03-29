// Nav bar

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

function dropDown() {
    nav.classList.toggle("nav-active");
}

burger.addEventListener("click", dropDown);

// Favourites

function createFavouriteProductsSection(){
    const productHTML = `
    <div class="product">
    <a href="productdetail.html">
        <img src="images/jacket.png" alt="Jacket example">
    </a>
    <p>Raincoat Long</p>
    <p>1 299 NOK</p>
    <button class="cta add-to-cart">Add to cart</button>`;

    const amountOfProducts = 8;
    const favouritesContainer = document.querySelector(".fav-grid");

    favouritesContainer.innerHTML = "";
    for (let i = 0; i < amountOfProducts; i++) {
        favouritesContainer.innerHTML += productHTML;
    }

}

createFavouriteProductsSection();

// Cart counter
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

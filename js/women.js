const womenProductUrl = "https://rainydays.miamo.no/wp-json/wc/v3/products/?category=26&consumer_key=ck_647ded031a7455be3d9a90041bcbd16cadd65eaa&consumer_secret=cs_d5334a795da1006c551b762d08ac0855b4e520c3";

const favouritesUrl = "https://rainydays.miamo.no/wp-json/wc/v3/products?tag=24&consumer_key=ck_647ded031a7455be3d9a90041bcbd16cadd65eaa&consumer_secret=cs_d5334a795da1006c551b762d08ac0855b4e520c3"

const productContainer = document.querySelector(".jackets");

async function createProductsView() {
    try {
        productsArray = await getProducts();
        productContainer.innerHTML = "";

        const iterations = 3;
        for (let i = 0; i < iterations; i++) {
            for (let i = 0; i < productsArray.length; i++) {
                addProductToContainer(productsArray[i]);
            }
        }
    } catch (error) {
        productContainer.innerHTML += "Product not found...\n" + error;
    }
}

async function getProducts() {
    const response = await fetch(womenProductUrl);
    const json = await response.json();
    console.log(json)
    return json;
}

function addProductToContainer(product) {
    productContainer.innerHTML += 
    `<div class="product">
        <a href="productdetail.html?id=${product.id}">
            <img src="${product.images[0].src}" alt="${product.name}">
        </a>
        <p>${product.name}</p>
        ${product.price_html}
        <button type="button" class="cta add-to-cart">Add to cart</button>
    </div>`
}

createProductsView();

// Cart counter
const cart = document.querySelector(".cart-counter");
const cartBtn = document.querySelectorAll(".add-to-cart");
let counter = 0;

console.log(cartBtn[0]);

for(let i = 0; i < cartBtn.length; i++){
    cartBtn[i].addEventListener("click", cartCounter);
}

function cartCounter() {
    counter++;
    cart.style = counter == 0 ? "display: none" : "display: inline-block";
    cart.innerHTML = counter;
}


// Consumer key:    ck_647ded031a7455be3d9a90041bcbd16cadd65eaa
// Consumer secret: cs_d5334a795da1006c551b762d08ac0855b4e520c3

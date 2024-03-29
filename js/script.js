// Nav bar

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

function dropDown() {
    nav.classList.toggle("nav-active");
}

burger.addEventListener("click", dropDown);

// Favourites
const favouritesUrl = "https://rainydays.miamo.no/wp-json/wc/v3/products?tag=24&consumer_key=ck_647ded031a7455be3d9a90041bcbd16cadd65eaa&consumer_secret=cs_d5334a795da1006c551b762d08ac0855b4e520c3"

const productContainer = document.querySelector(".fav-grid");

async function createProductsView() {
    try {
        productsArray = await getProducts();
        productContainer.innerHTML = "";
        
        for (let i = 0; i < productsArray.length; i++) {
            addProductToContainer(productsArray[i]);
        }

    } catch (error) {
        productContainer.innerHTML += "Product not found...\n" + error;
    }
}

async function getProducts() {
    const response = await fetch(favouritesUrl);
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
        <button class="cta add-to-cart">Add to cart</button>
    </div>`
}

createProductsView();


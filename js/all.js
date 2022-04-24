const allProductsUrl = "https://rainydays.miamo.no/wp-json/wc/v3/products/?consumer_key=ck_647ded031a7455be3d9a90041bcbd16cadd65eaa&consumer_secret=cs_d5334a795da1006c551b762d08ac0855b4e520c3";

const productContainer = document.querySelector(".jackets");

async function createProductsView() {
    try {
        productsArray = await getProducts();
        productContainer.innerHTML = "";

        const iterations = 5;
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
    const response = await fetch(allProductsUrl);
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

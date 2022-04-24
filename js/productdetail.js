const productDetails = document.querySelector(".product-detail");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const productId = params.get("id");

const detailUrl = `https://rainydays.miamo.no/wp-json/wc/v3/products/${productId}?consumer_key=ck_647ded031a7455be3d9a90041bcbd16cadd65eaa&consumer_secret=cs_d5334a795da1006c551b762d08ac0855b4e520c3`;

async function getApiResult() {
    try {
        const response = await fetch(detailUrl);
        const details = await response.json();
        return details;
    } 
    catch (error) {
        // productDetails.innerHTML = errorMessage();
    }   
}

function createDetails(result) {
    console.log(result);
    productDetails.innerHTML = `<div class="image-container">
    <img class="image" src="${result.images[0].src}" />
    </div>
    <div class="info-container">
    <h3>${result.name}</h3>
    ${result.description}
    <div class="price">${result.price_html}</div>
    <button class="cta add-to-cart">Add to cart</button>
    </div>`
    ;
}


async function detailApi() {
    const apiResult = await getApiResult();
    createDetails(apiResult);
}


detailApi();


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
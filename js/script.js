let conatiner_products = document.getElementById("show-product");
let order_btn = document.getElementById("order-btn");



document.querySelectorAll("aside a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll("aside a").forEach(a => a.classList.remove("open-page"));

        this.classList.add("open-page");
    });
});


let products = [
    {
        img: '/img/dish-cards-img/Images (1).png',
        id: 1,
        name: 'Spicy seasoned seafood noodles',
        price: 2.34,
        category: 'soup',
        quant: 20
    },
]

showsoupProduct(products)


function showsoupProduct(products) {
    conatiner_products.innerHTML = ``
    products.map((MapProduct) => {
        return (
            conatiner_products.innerHTML += `
            <div class="product-cards flex">
                        <div class="about-name-cards flex flex-col">
                            <h1 class="product-name">
                                ${MapProduct.name}
                            </h1>
                            <p class="price">
                                $ ${MapProduct.price}
                            </p>
                            <p class="Bowls-available">
                                ${MapProduct.quant} Bowls available
                            </p>
                            <button id="order-btn"  ${onclick = "orderbtn(MapProduct)"}  class="order-btn w-[100px] bg-red-700">
                                order
                            </button>
                        </div>
                        <div class="about-cards-img">
                            <img src="${MapProduct.img}" alt="">
                        </div>
                    </div>
            `
        )
    })
}


function orderbtn(product) {
    console.log(MapProduct);

}
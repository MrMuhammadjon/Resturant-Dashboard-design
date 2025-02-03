let conatiner_products = document.getElementById("show-product");
let order_btn = document.getElementById("order-btn");
let order_list = document.getElementById("order-list")



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
        quant: 20,
        orederQuant: 1,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (2).png',
        id: 2,
        name: 'Healthy noodle with spinach leaf',
        price: 3.44,
        category: 'soup',
        quant: 11,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (3).png',
        id: 3,
        name: 'Hot spicy fried rice with omelet',
        price: 1.22,
        category: 'soup',
        quant: 18,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (1).png',
        id: 4,
        name: 'Spicy seasoned seafood noodles',
        price: 4.50,
        category: 'soup',
        quant: 24,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (2).png',
        id: 5,
        name: 'Spicy seasoned seafood noodles',
        price: 5,
        category: 'soup',
        quant: 9,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (3).png',
        id: 6,
        name: 'Healthy noodle with spinach leaf',
        price: 2.30,
        category: 'soup',
        quant: 10,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (1).png',
        id: 7,
        name: 'Hot spicy fried rice with omelet',
        price: 7,
        category: 'soup',
        quant: 34,
        orederQuant: 1,
    },
    {
        img: '/img/dish-cards-img/Images (2).png',
        id: 8,
        name: 'Spicy seasoned seafood noodles',
        price: 8.20,
        category: 'soup',
        quant: 9,
        orederQuant: 1,
    },
]

showsoupProduct(products)


function showsoupProduct(products) {
    conatiner_products.innerHTML = ``
    products.map((MapProduct, index) => {
        return (
            conatiner_products.innerHTML +=
            `
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
                            <button id="order-btn"  onclick = "orderbtn('${index}')"  class="order-btn w-[100px] bg-red-700">
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


function showOrderList(order_cards) {
    order_list.innerHTML = ``
    order_cards.map((MarCard) => {
        return (
            order_list.innerHTML +=
            `
                     <div class="order-item">
                        <img src="${MarCard.img}" alt="Spicy seasoned sea...">
                        <div class="details">
                            <p class="name">${MarCard.name}</p>
                            <p class="price">$${MarCard.price}</p>
                            <input type="text" placeholder="Please, just a little bit spicy only.">
                        </div>
                        <div class="detalis2 flex  items-center gap-2">
                            <div class="qty">${MarCard.orederQuant}</div>
                            <div class="total-price">$${MarCard.price}</div>
                            <button class="remove">
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
            `
        )
    })

}

let order_cards = [

]


function orderbtn(index) {
        if (order_cards.find((item) => item.id == products[index].id)) {
            order_cards.forEach((products) => {
                if (products.id == products[index.id]) {
                    products.orederQuant++
                    products.quant++
                }
            })
        } else {
            order_cards.push(products[index])
        }

    showOrderList(order_cards)

}

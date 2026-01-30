const products = [{
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 4500,
    inStock: true
},
{
    id: 2,
    name: "Game Of Thrones",
    category: "books",
    price: 1500,
    inStock: true
},
{
    id: 3,
    name: "flower dress",
    category: "clothing",
    price: 3500,
    inStock: true
},
{
    id: 4,
    name: "Shirt",
    category: "clothing",
    price: 700,
    inStock: false
}
    , {
    id: 5,
    name: "Alice's Adventures in Wonderland",
    category: "books",
    price: 350,
    inStock: false
}
    , {
    id: 6,
    name: "Keyboard",
    category: "electronics",
    price: 1000,
    inStock: false
}
]
const filterState = {
    selectedCategories: [],
    maxPrice: 5000,
    inStockOnly: false,
    sortType: "default"
}
function applyFilters() {
    let filteredProduct = [...products]
    //category 
    if (filterState.selectedCategories.length > 0) {
        filteredProduct = products.filter(product =>
            filterState.selectedCategories.includes(product.category),
        )
    }
    //price slide
    filteredProduct = filteredProduct.filter(product =>
        product.price <= filterState.maxPrice
    )
    //inStock filter
    if (filterState.inStockOnly) {
        filteredProduct = filteredProduct.filter(product =>
            product.inStock === true
        )
    }
    //sort by
    if (filterState.sortType === "price-asc") {
        filteredProduct.sort((a, b) => a.price - b.price)
    }
    if (filterState.sortType === "price-desc") {
        filteredProduct.sort((a, b) => b.price - a.price)
    }
    renderProducts(filteredProduct)
}
const checkboxes = document.querySelectorAll(".category-checkbox")
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        let selectedCategory = checkbox.value
        if (checkbox.checked) {
            if (!filterState.selectedCategories.includes(selectedCategory)) {
                filterState.selectedCategories.push(selectedCategory)
            }
        }
        else {
            filterState.selectedCategories = filterState.selectedCategories.filter(
                category => category !== selectedCategory
            )
        }
        applyFilters();
    })
})
const priceRange = document.querySelector("#priceRange")
const priceValue = document.querySelector(".price-value")
priceRange.addEventListener("input", () => {
    filterState.maxPrice = Number(priceRange.value)
    priceValue.textContent = `$0 - $${priceRange.value}`
    applyFilters()
})
const inStock = document.querySelector("#inStock")
inStock.addEventListener("change", () => {
    filterState.inStockOnly = inStock.checked
    applyFilters()
})

const sortSelect = document.querySelector("select")
sortSelect.addEventListener("change", () => {
    filterState.sortType = sortSelect.value
    applyFilters()
})

const productList = document.querySelector(".product-list")
function renderProducts(products) {
    productList.innerHTML = ""
    if (productList.length === 0) {
        productList.innerHTML = "<li>No Product Found</li>"
        return
    }
    products.forEach(product => {
        const li = document.createElement("li")
        li.innerHTML = `
            <strong>${product.name}</strong><br/>
            Category: ${product.category}<br/>
            Price: $${product.price}<br/>
            ${product.inStock ? "In Stock" : "Out of Stock"}
        `
        productList.appendChild(li)
    })

}
applyFilters()
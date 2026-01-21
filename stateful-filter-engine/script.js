const products = [{
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 1500,
    inStock: true
},
{
    id: 2,
    name: "Game Of Thrones",
    category: "books",
    price: 50,
    inStock: true
},
{
    id: 3,
    name: "flower dress",
    category: "clothing",
    price: 350,
    inStock: true
},
{
    id: 4,
    name: "Shirt",
    category: "clothing",
    price: 500,
    inStock: false
}
    , {
    id: 5,
    name: "Alice's Adventures in Wonderland",
    category: "books",
    price: 100,
    inStock: false
}
    , {
    id: 6,
    name: "Keyboard",
    category: "electronics",
    price: 600,
    inStock: false
}
]
const filterState = {
    selectedCategories: [],
    maxPrice: 5000,
    inStockOnly: false,
    sortType: "default"
}
const checkboxes = document.querySelectorAll(".filter-group input[type='checkbox']")
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
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
function applyFilters() {
    let filteredProduct = products
    if (filterState.selectedCategories.length > 0) {
        filteredProduct = products.filter(product =>
            filterState.selectedCategories.includes(product.category),
        )
    }
    console.log(filteredProduct)
}


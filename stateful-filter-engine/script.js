const products = [{
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 1200,
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
}]
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
                console.log(filterState.selectedCategories)
            }
        }
        else {
            filterState.selectedCategories = filterState.selectedCategories.filter(
                category => category !== selectedCategory
            )
            console.log(filterState.selectedCategories)
        }
    })
})


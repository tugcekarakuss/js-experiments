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
const filterState={
    selectedCategories:[],
    maxPrice:500,
    inStockOnly:false,
    sortType:"default"

}
const checkboxes=document.querySelectorAll(".filter-group input[type='checkbox']")
checkboxes.forEach(checkbox=>{
    checkbox.addEventListener("click",()=>{
        let selectedCategory=checkbox.value
        console.log(selectedCategory)
    })
})


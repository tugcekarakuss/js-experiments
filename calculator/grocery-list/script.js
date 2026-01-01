const grocery_list = document.querySelector(".grocery-list")

const clear_all = document.querySelector(".clear-btn")
clear_all.addEventListener("click", function () {
    if (grocery_list.children.length === 0) {
        alert("There are no items to delete.");
        return;
    }
    grocery_list.innerHTML = ""
    alert("All items deleted.")
})

const userInput = document.querySelector(".item-input")
userInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter")
        addItem();
})
const add_btn = document.querySelector(".add-btn")
add_btn.addEventListener("click", addItem)

function addItem() {
    const value = userInput.value.trim();
    if (value === "") return;
    const li = document.createElement("li")
    li.className = "grocery-item"
    const span = document.createElement("span")
    span.className = "item-name"
    span.textContent = value;
    const btn = document.createElement("button")
    btn.className = "delete-btn"
    btn.textContent = "✕"
    li.append(span, btn);
    grocery_list.appendChild(li)
    userInput.value = ""
    span.addEventListener("click", function () {
        span.style.textDecoration = "line-through"
    })
}
grocery_list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove()
    }
})

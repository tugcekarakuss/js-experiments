const input = document.querySelector("#todoInput")
const todolist = document.querySelector("#todoList")
const addButton = document.querySelector("#addBtn")
const filterButtons = document.querySelector(".filters")

function addTodo() {
    if (input.value.length == 0) {
        alert("please add a to do")
    }
    else {
        const todo = document.createElement("li")
        let text = document.createElement("span")
        let completeBtn = document.createElement("button")
        text.innerText = input.value
        completeBtn.innerText = "Complete"
        todo.append(text)
        todo.append(completeBtn)
        todolist.append(todo)
        input.value = ""

        completeBtn.addEventListener("click", function () {
            todo.classList.toggle("completed");
        })
    }
}
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter")
        addTodo()
})

for (const button of filterButtons.children) {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter
        const todos = document.querySelectorAll("#todoList li")

        todos.forEach(todo => {
            const isCompleted = todo.classList.contains("completed")
            if (filter === "all") {
                todo.style.display = "flex"
            }
            else if (filter === "active") {
                if (!isCompleted) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
            }
            else if (filter === "completed") {
                if (isCompleted) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
            }
        })
    })
}
addButton.addEventListener("click", addTodo)

const input = document.querySelector("#noteInput")
const noteList = document.querySelector("#noteList")
const addButton = document.querySelector("#addBtn")

function addNote() {
    if (input.value.length == 0) {
        alert("please add a note")
    }
    else {
        note = input.value
        const li = document.createElement("li")
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        li.append(note, deleteBtn)
        noteList.appendChild(li)

        input.value = ""

        deleteBtn.addEventListener("click", function () {
            li.remove()
        })
    }
}
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addNote()
    }
})
addButton.addEventListener("click", addNote)
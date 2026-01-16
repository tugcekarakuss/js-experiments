const input = document.querySelector("#noteInput");
const noteList = document.querySelector("#noteList");
const addButton = document.querySelector("#addBtn");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = note;
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", () => {
      deleteNote(index);
    });

    li.appendChild(deleteBtn);
    noteList.appendChild(li);
  });
}

function addNote() {
  if (input.value.length === 0) return;

  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") addNote();
});

addButton.addEventListener("click", addNote);

renderNotes();

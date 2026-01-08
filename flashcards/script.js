const question = document.querySelector(".input-question")
const answer = document.querySelector(".input-answer")
const flashcards = document.getElementsByClassName("cards-list")[0]
const createCard = document.getElementsByClassName("create-card")[0];
let contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
function hideCreateBox() {
    createCard.style.display = "none"
}
function showCreateCardBox() {
    createCard.style.display = "flex"
}
function delFlashCards() {
    localStorage.clear();
    flashcards.innerHTML = ""
    contentArray = []
}
contentArray.forEach(divMaker)
function divMaker(text) {
    var div = document.createElement("div")
    var h3_question = document.createElement("h3");
    var p_answer = document.createElement("p")

    div.className = "card"
    h3_question.setAttribute("style", "color:blue; border-top:1px;")
    h3_question.innerHTML = text.my_question;
    p_answer.setAttribute("style", "text-align:center;")
    p_answer.style.display = "none"
    p_answer.innerHTML = text.my_answer

    div.appendChild(h3_question)
    div.appendChild(p_answer)
    div.addEventListener("click", function () {
        if (p_answer.style.display === "none") {
            p_answer.style.display = "block"
        } else {
            p_answer.style.display = "none"
        }
    })
    flashcards.appendChild(div)
}

function addFlashCard() {
    var flashcardsInfo = {
        "my_question": question.value,
        "my_answer": answer.value
    }
    contentArray.push(flashcardsInfo)
    localStorage.setItem("items", JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = ""
    answer.value = ""
}
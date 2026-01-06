const question = document.querySelector(".input-question")
const answer = document.querySelector(".input-answer")
const flashcards = document.getElementsByClassName("cards-list")[0]
const createCard = document.getElementsByClassName("create-card")[0];
let contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
function hideCreateBox(){
    createCard.style.display="none"
}
function showCreateCardBox(){
    createCard.style.display="flex"
}
function delFlashCards(){
    localStorage.clear();
    flashcards.innerHTML=""
    contentArray=[]
}
var counter = 0;
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const countDisplay = document.querySelector(".count");
function increaseNumber() {
    counter++
    countDisplay.innerHTML=counter;
}
function decreaseNumber() {
    counter--
    countDisplay.innerHTML=counter;
}
increase.addEventListener("click", increaseNumber)
decrease.addEventListener("click", decreaseNumber)

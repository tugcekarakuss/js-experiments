const amount = document.querySelector("#bill");
const guest = document.querySelector("#people")
const quality = document.querySelector("#service")
const tipAmount = document.querySelector("#tip-amount")
const resultBox = document.querySelector(".result");
const calculate_btn = document.querySelector("#calculate-btn")
const clear_btn=document.querySelector("#clear-btn")
clear_btn.addEventListener("click",function(){
    guest.value=""
    amount.value=""
    quality.value=""
    tipAmount.innerHTML = "0.00";
})
calculate_btn.addEventListener("click", calculate)
function calculate() {
    const amountValue = Number(amount.value);
    const guestValue = Number(guest.value);
    const qualityValue = Number(quality.value);

    if (!amountValue || !guestValue || !qualityValue) {
        resultBox.style.display = "none"; 
        return
    }
    const tip = ((amountValue * qualityValue) / guestValue).toFixed(2)
    tipAmount.innerHTML = tip
    resultBox.style.display = "block";  
}
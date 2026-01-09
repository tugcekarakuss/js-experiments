const input = document.querySelector("#textInput")
const warning = document.querySelector("#warning")
const count = document.querySelector("#count")
input.maxLength = 20;
input.addEventListener("input", function () {
    let countNumber = input.value.length
    count.textContent = countNumber
    if (countNumber >= 20) {
        count.style.color = "red"
        warning.textContent = "Character limit reached"

    }
    else if (countNumber <= 10) {
        count.style.color = "grey"
        warning.textContent=""
    }
    else {
        count.style.color = "orange"
        warning.textContent=""
    }
})


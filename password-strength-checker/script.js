const input = document.querySelector("#passwordInput")
const strengthText = document.querySelector("#strengthText")
input.addEventListener("input", function () {
    let password = input.value
    let password_length = input.value.length
    const isString = password.match(/[a-z]+/)
    const isNumber = password.match(/[0-9]+/);

    if (password_length < 6) {
        strengthText.textContent = "weak"
        strengthText.style.color = "red"
    }
    else if (password_length >= 8 && isString && isNumber) {
        strengthText.textContent = "strong"
        strengthText.style.color = "green"
    }
    else {
        strengthText.textContent = "medium"
        strengthText.style.color = "orange"
    }
})
const formState = {
    currentStep: 1,
    formData: {
        name: "",
        email: "",
        role: ""
    },
    errors: {
        name: "",
        email: "",
        role: ""
    }
}
const nextBtn = document.querySelector(".next-btn")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
nextBtn.addEventListener("click", () => {
   
})
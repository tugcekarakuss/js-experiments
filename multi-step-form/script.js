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
  nameError.textContent = ""
  emailError.textContent = ""
  formState.errors.name = ""
  formState.errors.email = ""

  let isValid = true

  if (nameInput.value.trim() === "") {
    formState.errors.name = "Please enter your name"
    nameError.textContent = formState.errors.name
    isValid = false
  }

  if (emailInput.value.trim() === "") {
    formState.errors.email = "Please enter your email"
    emailError.textContent = formState.errors.email
    isValid = false
  }

  if (!isValid) {
    return
  }

  formState.formData.name = nameInput.value
  formState.formData.email = emailInput.value

  console.log("STEP 1 OK", formState)
})

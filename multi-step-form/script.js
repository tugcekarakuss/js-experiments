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
const nextBtns = document.querySelectorAll(".next-btn")
const backBtns = document.querySelectorAll(".back-btn")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const summaryBox = document.querySelector(".summary-box")
const successMessage = document.querySelector(".success-message")
const submitBtn = document.querySelector(".submit-btn")

function updateSteps() {
  const steps = document.querySelectorAll(".form-step")
  const stepIndicators = document.querySelectorAll(".steps .step")
  steps.forEach(step => {
    const stepNumber = Number(step.dataset.step)
    step.classList.toggle("active", stepNumber === formState.currentStep)
  })
  stepIndicators.forEach((step, index) => {
    step.classList.toggle(
      "active",
      index + 1 === formState.currentStep
    )
  })
}

function validateStep1() {
  nameError.textContent = ""
  emailError.textContent = ""
  formState.errors.name = ""
  formState.errors.email = ""

  let isValid = true

  if (nameInput.value.trim() === "") {
    formState.errors.name = "please enter your name"
    nameError.textContent = formState.errors.name
    isValid = false
  }

  const emailValue = emailInput.value.trim()

  if (emailValue === "") {
    formState.errors.email = "please enter your email"
    emailError.textContent = formState.errors.email
    isValid = false
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    formState.errors.email = "please enter a valid email address"
    emailError.textContent = formState.errors.email
    isValid = false
  }

  if (!isValid) return false

  formState.formData.name = nameInput.value
  formState.formData.email = emailValue

  return true
}

function validateStep2() {
  const roleErrorEl = document.querySelector("#role-error")
  roleErrorEl.textContent = ""

  const selectedRadio = document.querySelector("input[name='role']:checked")

  if (!selectedRadio) {
    roleErrorEl.textContent = "please select your role"
    return false
  }

  formState.formData.role =
    selectedRadio.dataset.role || selectedRadio.value

  return true
}
nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (formState.currentStep === 1) {
      const ok = validateStep1()
      if (!ok) return
    }
    if (formState.currentStep === 2) {
      const ok = validateStep2()
      if (!ok) return
    }
    formState.currentStep += 1
    updateSteps()

    if (formState.currentStep === 3) {
      renderSummary()
    }
  })
})
backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (formState.currentStep === 1) return
    formState.currentStep -= 1
    updateSteps()
  })
})

function renderSummary() {
  summaryBox.innerHTML = `
    <p> <strong>Name:</strong> ${formState.formData.name}</p>
    <p> <strong>Email:</strong> ${formState.formData.email}</p>
    <p> <strong>Role:</strong> ${formState.formData.role}</p>
  `
}
submitBtn.addEventListener("click", () => {
  successMessage.textContent = "Submitting"

  setTimeout(() => {
    successMessage.textContent = "Form successfully submitted 🎉"
  }, 1000)
})
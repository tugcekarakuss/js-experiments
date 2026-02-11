const applications = [
  {
    id: 1,
    company: "Trendyol",
    position: "Frontend Developer",
    workType: "hybrid",
    status: "applied",
    salary: 45000,
    appliedDate: "2025-01-10"
  },
  {
    id: 2,
    company: "Hepsiburada",
    position: "Junior Frontend Developer",
    workType: "remote",
    status: "interview",
    salary: 42000,
    appliedDate: "2025-01-18"
  },
  {
    id: 3,
    company: "Getir",
    position: "UI Developer",
    workType: "onsite",
    status: "rejected",
    salary: 40000,
    appliedDate: "2024-12-22"
  },
  {
    id: 4,
    company: "Peak Games",
    position: "Frontend Engineer",
    workType: "remote",
    status: "offer",
    salary: 60000,
    appliedDate: "2025-01-02"
  },
  {
    id: 5,
    company: "Startup X",
    position: "Frontend Intern",
    workType: "remote",
    status: "applied",
    salary: 25000,
    appliedDate: "2025-01-25"
  }
]
const filteredState = {
  workType: "",
  status: "",
  minSalary: 0,
  sorting: ""
}
const list = document.querySelector("#applicationList")
function applyFilters() {
  list.innerHTML = ""

  let filteredApplication = [...applications]

  if (filteredState.workType !== "") {
    filteredApplication = filteredApplication.filter((application) => {
      return application.workType === filteredState.workType
    })
  }

  if (filteredState.status !== "") {
    filteredApplication = filteredApplication.filter((application) => {
      return application.status === filteredState.status
    })
  }

  if (filteredState.minSalary > 0) {
    filteredApplication = filteredApplication.filter(application =>
      application.salary >= filteredState.minSalary
    )
  }

  if (filteredState.sorting === "salary-asc") {
    filteredApplication.sort((a, b) => a.salary - b.salary)
  }

  if (filteredState.sorting === "salary-desc") {
    filteredApplication.sort((a, b) => b.salary - a.salary)
  }

  if (filteredState.sorting === "date-new") {
    filteredApplication.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate))
  }

  if (filteredState.sorting === "date-old") {
    filteredApplication.sort((a, b) => new Date(a.appliedDate) - new Date(b.appliedDate))
  }

  filteredApplication.forEach((application) => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
      <h3>${application.company}</h3>
      <p>${application.position}</p>
      <p>${application.workType} • ${application.status}</p>
      <p>₺${application.salary}</p>
      <small>${application.appliedDate}</small>
      `
    list.appendChild(card)
  })
}

applyFilters()
const typeSelect = document.querySelector("#typeFilter")
typeSelect.addEventListener("change", (e) => {
  filteredState.workType = e.target.value
  applyFilters()
})

const statusFilter = document.querySelector("#statusFilter")
statusFilter.addEventListener("change", (e) => {
  filteredState.status = e.target.value
  applyFilters()
})


const minSalaryInput = document.querySelector("#minSalary")

minSalaryInput.addEventListener("input", (e) => {
  filteredState.minSalary = Number(e.target.value)
  applyFilters()
})

const sortSelect = document.querySelector("#sortSelect")

sortSelect.addEventListener("change", (e) => {
  filteredState.sorting = e.target.value
  applyFilters()
})



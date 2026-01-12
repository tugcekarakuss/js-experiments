const expenseNameInput = document.querySelector("#expenseName")
const expenseAmountInput = document.querySelector("#expenseAmount")
const addButton = document.querySelector("#addBtn")
const expenseList = document.querySelector("#expenseList")
const totalAmount = document.querySelector("#totalAmount")
let total = 0;

function addExpense() {
    if (expenseNameInput.value.length == 0) {
        alert("please add a expense name")
    }
    else if (Number(expenseAmountInput.value) <= 0 || expenseAmountInput.value.length == 0) {
        alert("amount is not smaller than zero or blank")
    }
    else {
        let list = document.createElement("li")
        let name = expenseNameInput.value;
        let name_span = document.createElement("span")
        let amount = Number(expenseAmountInput.value)
        let amount_span = document.createElement("span")
        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"
        name_span.append(name)
        amount_span.append(amount + "$")
        list.append(name_span, amount_span, deleteBtn)
        expenseList.appendChild(list)
        expenseAmountInput.value = ""
        expenseNameInput.value = ""
        total = total+ amount;
        totalAmount.innerText = total

        deleteBtn.addEventListener("click", function () {
            total=total-amount
            totalAmount.innerText = total
            list.remove()
        })
        
    }
}

addButton.addEventListener("click", addExpense)




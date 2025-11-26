var msgInput = document.querySelector("#msgInput");
var btn = document.querySelector("#sendBtn");
var outputBox = document.querySelector("#outputBox")
function getMessage() {
    if (msgInput.value.trim() === "") {
        outputBox.innerHTML = "Hey, you forgot to type something 😑"
    }
    else {
        outputBox.innerHTML = msgInput.value
    }
    msgInput.value = ""
}
btn.addEventListener("click", getMessage)

msgInput.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        getMessage();
    }
})

var index = 0
function changeColor() {
    var colors = ["#fdd9eb", "#be2d65", "#bf195b", "#af1485", "#672781"];
    var currentColor = colors[index]
    document.body.style.backgroundColor = currentColor;
    document.querySelector("p").innerText = "Background Color: " + currentColor;
    index++
    if (index > colors.length - 1) {
        index = 0;
    }
}
var btn = document.querySelector("button");
btn.addEventListener("click", changeColor)

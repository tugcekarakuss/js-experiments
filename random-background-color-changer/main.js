function getRandomColor(){
    var chars="123456789abcdef"
    var color="#"

    for(var i=0;i<6;i++){
        var randomIndex=Math.floor(Math.random()*chars.length)
        color += chars[randomIndex]
    }
    return color
}
function changeColor(){
    var randomColor=getRandomColor()
    document.body.style.backgroundColor=randomColor
    var text =document.querySelector("#color-code")
    text.innerHTML=randomColor
}
var btn=document.querySelector("button")
btn.addEventListener("click",changeColor)
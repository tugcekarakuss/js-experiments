const input =document.querySelector("#usernameInput")
const searchBtn=document.querySelector("#searchBtn")
const statusMessages=document.querySelector("#statusMessage")
const profileSection= document.querySelector("#profileSection")
const repoSection= document.querySelector("#repoSection")

function findUser(){
    statusMessages.textContent=""
    profileSection.classList.add("hidden")
    repoSection.classList.add("hidden")
    const username =input.value
    if(username===""){
        statusMessages.textContent="please enter username"
        return
    }
    else{
        statusMessages.textContent = "Loading..."
        getUser(username)
    }
}

//event listeners
searchBtn.addEventListener("click",findUser)
input.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        findUser()
    }
})
const githubProfileApi = "https://api.github.com/users/"
const input = document.querySelector("#usernameInput")
const searchBtn = document.querySelector("#searchBtn")
const statusMessages = document.querySelector("#statusMessage")
const profileSection = document.querySelector("#profileSection")
const repoSection = document.querySelector("#repoSection")

const errorContainer = document.querySelector("#errorContainer")
const fixedGif = document.querySelector(".fixed-gif-container")

const avatar = document.querySelector("#avatar")
const userName = document.querySelector("#name")
const bio = document.querySelector("#bio")
const followers = document.querySelector("#followers")
const following = document.querySelector("#following")
const reposCount = document.querySelector("#reposCount")
const profileLink = document.querySelector("#profileLink")


const getUser = async (username) => {
    const response = await fetch(githubProfileApi + username)
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("User not found")
        }
        if (response.status === 403) {
            throw new Error("Rate limit exceeded")
        }
        throw new Error("Something went wrong")
    }
    return await response.json()
}
function resetUI() {
    statusMessages.textContent = ""
    profileSection.classList.add("hidden")
    repoSection.classList.add("hidden")
    errorContainer.classList.add("hidden")
}
async function findUser() {
    resetUI()
    const username = input.value.trim();
    if (username === "") {
        statusMessages.textContent = "Please enter username";
        return;
    }

    statusMessages.textContent = "Loading... ";

    try {
        const user = await getUser(username)
        console.log(user)
        statusMessages.textContent = "User found successfully."
        profileSection.classList.remove("hidden")
        fixedGif.classList.remove("hidden")

        avatar.src = user.avatar_url
        userName.textContent = user.name || "No Name"
        bio.textContent = user.bio || "No bio"
        followers.textContent = "Followers: " + user.followers
        following.textContent = "Following: " + user.following
        reposCount.textContent = "Public Repos: " + user.public_repos
        profileLink.href = user.html_url

    } catch (error) {
        statusMessages.textContent = error.message;
        errorContainer.classList.remove("hidden"); // Hata resmini göster

        fixedGif.classList.add("hidden");
        console.log("Hata oluştu, GIF gizleniyor...");
    }
}

searchBtn.addEventListener("click", findUser)
input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        findUser()
    }
})
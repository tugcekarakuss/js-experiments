const githubProfileApi = "https://api.github.com/users/"
const input = document.querySelector("#usernameInput")
const searchBtn = document.querySelector("#searchBtn")
const statusMessages = document.querySelector("#statusMessage")
const profileSection = document.querySelector("#profileSection")
const repoSection = document.querySelector("#repoSection")
const repoList = document.querySelector("#repoList")


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

const getRepos = async (username) => {
    const response = await fetch(githubProfileApi + username + "/repos")
    if (!response.ok) {
        throw new Error("Failed to fetch repos")
    }
    return await response.json()
}

function renderRepos(repos) {
    repoList.innerHTML = ""
    repos.forEach(repo => {
        const div = document.createElement("div")
        div.classList.add("repo-card")

        div.innerHTML = `
            <h4>
                <a href="${repo.html_url}" target="_blank">
                    ${repo.name}
                </a>
            </h4>
            <p>${repo.description || "No description"}</p>
            <small>⭐ ${repo.stargazers_count} • ${repo.language || "Unknown"}</small>
        `
        repoList.appendChild(div)
    });
    repoSection.classList.remove("hidden")
}
function resetUI() {
    statusMessages.textContent = ""
    profileSection.classList.add("hidden")
    repoSection.classList.add("hidden")
    errorContainer.classList.add("hidden")
    repoList.innerHTML = ""

}
async function findUser() {
    resetUI()
    const username = input.value.trim();
    if (username === "") {
        statusMessages.textContent = "Please enter username";
        return;
    }

    statusMessages.textContent = "Loading... ";
    searchBtn.disabled = "true"
    try {
        const user = await getUser(username)
        const repos = await getRepos(username)
        console.log(repos)
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
        renderRepos(repos)
        searchBtn.disabled = false;

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
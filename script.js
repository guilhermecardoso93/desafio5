function githbInfos() {
    const url = `https://api.github.com/users/guilhermecardoso93`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            twitter.textContent = data.twitter_username,
                projetos.textContent = data.public_repos + " repositórios",
                userName.textContent = data.name,
                avatarUrl.src = data.avatar_url,
                login.textContent = data.login,
                followers.textContent = data.followers + " seguidores",
                following.textContent = data.following + " seguindo",
                city.textContent = data.location
            loginGit.href = data.html_url
        })
}

githbInfos()

var userName = document.querySelector("#userName")
var login = document.querySelector("#login")
var logoFooter = document.querySelector(".profile-image")
var border = document.querySelector(".profile-image")

function radom() {
    document.getElementById("card").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    document.getElementById("card-main").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function light() {
    userName.style.color = "#000000";
    login.style.color = "#000000";
    logoFooter.style.color = "#000000";
    document.getElementById("card").style.backgroundColor = '#F5F5F5'
    document.getElementById("card-main").style.backgroundColor = '#D3D3D3'

}

function padrao() {
    userName.style.color = "#F1F1F1";
    login.style.color = "#F1F1F1";
    logoFooter.style.color = "#F1F1F1";
    document.getElementById("card").style.backgroundColor = '#000000'
    document.getElementById("card-main").style.backgroundColor = '#0E1218'
}

function purple() {
    userName.style.color = "#F1F1F1";
    login.style.color = "#F1F1F1";
    logoFooter.style.color = "#F1F1F1";
    document.getElementById("card").style.backgroundColor = '#4B0082'
    document.getElementById("card-main").style.backgroundColor = '#9370DB'
}
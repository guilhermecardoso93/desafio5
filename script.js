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

function changeColor() {

}
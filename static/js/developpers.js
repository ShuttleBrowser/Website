let gitUrl = "https://api.github.com/repos/ShuttleBrowser/shuttle/commits"

let copyToClipboard = () => {
    let textCopy = document.querySelector('#git-cmd')
    textCopy.select()
    document.execCommand("copy")
}

let fetchGit = () => {
    fetch(gitUrl).then(res => res.json()).then((data) => {
        for (i in data) {
            if (i >= 3) {
                break
            } else {
                document.querySelector('.commit-list').innerHTML += `
                <div class="last-commit">
                    <img src="${data[i].author.avatar_url}" class="last-commit-profile-img">
                    <div class="last-commit-text">
                        <p><span class="last-commit-text-title">${data[i].commit.message}</span></p>
                        <p class="last-commit-profile-text"><span class="last-commit-text-username">${data[i].commit.author.login}</span> <span class="last-commit-text-comited">commited 8 day ago</span></p>
                        <p><span class="last-commit-profile-hash">${data[i].sha.substring(0,6)}</span></p>
                    </div>
                </div>
                `
            }
        }
    })
}

fetchGit()
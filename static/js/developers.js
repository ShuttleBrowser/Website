
let now = new Date()
let previous = new Date()
previous.setFullYear(previous.getFullYear() - 1)

let gitUrl = "https://api.github.com/repos/ShuttleBrowser/shuttle/commits?since=" + previous.toISOString() + "&until="

let copyToClipboard = () => {
    let textCopy = document.querySelector('#git-cmd')
    textCopy.select()
    document.execCommand("copy")
}

let fetchGit = (time) => {
    console.log(gitUrl + time)
    fetch(gitUrl + time).then((res) => {
        return res.json()
    }).then((data) => {
        for (i in data) {
            if (i < 3) {
                console.log(data[i])
                document.querySelector('.commit-list').innerHTML += `
                <div class="last-commit">
                    <img src="${(data[i].author != null) ? data[i].author.avatar_url : ''}" class="last-commit-profile-img">
                    <div class="last-commit-text">
                        <p><span class="last-commit-text-title">${data[i].commit.message}</span></p>
                        <p class="last-commit-profile-text"><span class="last-commit-text-username"><a href="${(data[i].committer != null) ? data[i].committer.html_url : '#'}" target="_blank">${(data[i].author != null) ? data[i].author.login : ''}</a></span> <span class="last-commit-text-comited">committed ${(data[i].author != null) ? differenceDate(data[i].commit.author.date) : ''} ago</span></p>
                        <p><span class="last-commit-profile-hash"><a href="${data[i].html_url}" target="_blank">${data[i].sha.substring(0,7)}</a></span></p>
                    </div>
                </div>
                `
            }
        }
    }).catch(function(err) {
        console.error(err)
    });
}

let differenceDate = (date) => {
    const now = new Date()
    date = new Date(date)

    const millisecondDiff = now.getTime() - date.getTime()

    const secondDiff = Math.round(millisecondDiff / 1000)
    const minuteDiff = Math.floor(millisecondDiff / (60 * 1000))
    const hourDiff =   Math.floor(millisecondDiff / (3600 * 1000))
    const dayDiff =    Math.floor(millisecondDiff / (3600 * 1000 * 24))
    const weekDiff =   Math.round(millisecondDiff / (3600 * 1000 * 24 * 7))
    const monthDiff =  Math.round(millisecondDiff / (3600 * 1000 * 24 * 30))
    const yearDiff =   Math.round(millisecondDiff / (3600 * 1000 * 24 * 365))

    let chosen = {}

    if(yearDiff)  {
        chosen = {
            value: yearDiff,
            word: 'year'
        }
    } else {
        if(monthDiff) {
            chosen = {
                value: monthDiff,
                word: 'month'
            }
        } else {
            if(weekDiff) {
                chosen = {
                    value: weekDiff,
                    word: 'week'
                }
            } else {
                if(dayDiff) {
                    chosen = {
                        value: dayDiff,
                        word: 'day'
                    }
                } else {
                    if(hourDiff) {
                        chosen = {
                            value: hourDiff,
                            word: 'hour'
                        }
                    } else {
                        if(minuteDiff) {
                            chosen = {
                                value: minuteDiff,
                                word: 'minute'
                            }
                        } else {
                            chosen = {
                                value: secondDiff,
                                word: 'second'
                            }
                        }
                    }
                }
            }
        }
    }
    
    let sentence = chosen.value + ' ' + chosen.word
    if(chosen.value > 1) {
        sentence += 's'
    }
    return sentence
}

fetchGit(now.toISOString())
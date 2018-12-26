let isActive = true

let getPageName = () => {
    return $route.name
}

let activeTransparentNav = () => {
    if (getPageName() === "Home" || "Developers") {
        return true
    }
}

let setDropDownPosition = () => {
    let ressourcesBtnPos = document.getElementById("ressources").getBoundingClientRect().left
    document.querySelector('.dropDown').style.left = `${ressourcesBtnPos - 17}px`
    document.querySelector('.dropDown-mouseover').style.left = `${ressourcesBtnPos - 17}px`
}

let toggleDropDown = (show) => {
    setDropDownPosition()
    if (show === true) {
        document.querySelector('.dropDown').style.display = "block"
    } else {
        document.querySelector('.dropDown').style.display = "none"
    }
}

setDropDownPosition()
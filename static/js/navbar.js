let isActive = true

let getPageName = () => {
    return $route.name
}

let activeTransparentNav = () => {
    if (getPageName() === "Home" || "Developers") {
        return true
    }
}

let toggleDropDown = () => {
    const dropdown = document.getElementById('mainnav')
    if(dropdown.classList.contains('active')) {
        dropdown.classList.remove('active')
    } else {
        dropdown.classList.add('active')
    }
}
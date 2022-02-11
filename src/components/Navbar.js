const Navbar = () => {
    const navbar_container = document.createElement("div")
    document.body.appendChild(navbar_container)
    navbar_container.id = "navbar-container"

    return navbar_container
}

export { Navbar } 
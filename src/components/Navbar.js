const Navbar = () => {
    const navbar_container = document.createElement("div")
    document.body.appendChild(navbar_container)
    navbar_container.id = "navbar-container"
    
    const navbar_content = document.createElement("div")
    navbar_content.id = "navbar-content"
    navbar_container.appendChild(navbar_content)

    const div = document.createElement("div")
    div.id = "search"
    div.innerText = "Want to a to-do?"    
    navbar_content.appendChild(div)

    const taskbutton = document.createElement("button")
    taskbutton.id = "addtodo-button"
    taskbutton.innerText = "+"
    navbar_content.appendChild(taskbutton)


    return navbar_container
}

export { Navbar } 
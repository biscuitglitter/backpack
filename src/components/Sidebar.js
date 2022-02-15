const Sidebar = () => {
    const content = document.getElementById("content")
    
    const sidebar = document.createElement("div")
    content.appendChild(sidebar)
    sidebar.classList.add("sidebar")

    const sidebar_top = document.createElement("div")
    sidebar_top.id = "sidebar-top"
    sidebar.appendChild(sidebar_top)

    const projects_container = document.createElement("div")
    projects_container.id = "projects-container"
    sidebar.appendChild(projects_container)

    const firstH1 = document.createElement("h1")
    firstH1.innerText = "ACTIONS"
    sidebar_top.appendChild(firstH1)
    
    const home = document.createElement("div")
    home.id = "home"
    home.classList.add("selected")
    sidebar_top.appendChild(home)

    const textone = document.createElement("h2")
    textone.innerText = "Home"
    home.appendChild(textone)

    const projects = document.createElement("div")
    projects.id = "projects"
    sidebar_top.appendChild(projects)

    const texttwo = document.createElement("h2")
    texttwo.innerText = "Projects"
    projects.appendChild(texttwo)
    
    const sidebar_bottom = document.createElement("div")
    sidebar_bottom.id = "greeting-message"
    sidebar.appendChild(sidebar_bottom)

    const day = document.createElement("div")
    day.classList.add("day")
    sidebar_bottom.appendChild(day)
    day.innerText = "Enjoy the rest of your Thursday!"

    return sidebar
}

export { Sidebar } 
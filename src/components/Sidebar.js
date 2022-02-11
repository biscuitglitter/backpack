const Sidebar = () => {
    const content = document.getElementById("content")
    
    const sidebar = document.createElement("div")
    content.appendChild(sidebar)
    sidebar.classList.add("sidebar")

    const sidebar_top = document.createElement("div")
    sidebar_top.id = "sidebar-top"
    sidebar.appendChild(sidebar_top)

    const sidebardiv = document.createElement("div")
    sidebardiv.id = "sidebardiv"
    sidebar_top.appendChild(sidebardiv)

    const firstH1 = document.createElement("h1")
    firstH1.innerText = "ACTIONS"
    sidebardiv.appendChild(firstH1)
    
    const today = document.createElement("div")
    today.id = "today"
    sidebardiv.appendChild(today)

    const textone = document.createElement("h2")
    textone.innerText = "Today"
    today.appendChild(textone)

    const projects = document.createElement("div")
    projects.id = "projects"
    sidebardiv.appendChild(projects)

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
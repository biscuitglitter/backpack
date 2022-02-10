const Sidebar = () => {
    const content = document.getElementById("content")
    
    const sidebar = document.createElement("div")
    content.appendChild(sidebar)
    sidebar.classList.add("sidebar")

    const sidebar_top = document.createElement("div")
    sidebar_top.id = "sidebar-top"
    sidebar.appendChild(sidebar_top)

    const actions = document.createElement("div")
    actions.id = "actions"
    sidebar_top.appendChild(actions)

    const firstH1 = document.createElement("h1")
    firstH1.innerText = "ACTIONS"
    actions.appendChild(firstH1)
    
    const today = document.createElement("div")
    today.classList.add("today")
    today.innerText = "Today"
    actions.appendChild(today)

    const projects = document.createElement("div")
    projects.classList.add("projects")
    projects.innerText = "Projects"
    actions.appendChild(projects)
    
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
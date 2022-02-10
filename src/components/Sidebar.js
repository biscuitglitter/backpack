const Sidebar = () => {
    const content = document.getElementById("content")
    
    const sidebar = document.createElement("div")
    content.appendChild(sidebar)
    sidebar.classList.add("sidebar")

    const sidebarTop = document.createElement("div")
    sidebarTop.id = "greeting-message"
    sidebar.appendChild(sidebarTop)

    const day = document.createElement("div")
    day.classList.add("day")
    sidebarTop.appendChild(day)
    day.innerText = "have a good thursday, yasmine"

    const actions = document.createElement("div")
    actions.id = "actions"
    sidebar.appendChild(actions)

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

    const ul = document.createElement("ul")
    sidebar.appendChild(ul)


    return sidebar, sidebarTop
}

export { Sidebar } 
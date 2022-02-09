const Sidebar = () => {
    const content = document.getElementById("content")
    
    const sidebar = document.createElement("div")
    content.appendChild(sidebar)
    sidebar.classList.add("sidebar-container")

    const sidebarTop = document.createElement("div")
    sidebarTop.classList.add("sidebar-top")
    sidebar.appendChild(sidebarTop)

    const menu = document.createElement("div")
    menu.classList.add("menu")
    menu.innerText = "Menu"
    sidebarTop.appendChild(menu)

    const plan = document.createElement("div")
    plan.classList.add("plan")
    sidebarTop.appendChild(plan)
    plan.innerText = "Plan your next list"

    const actions = document.createElement("div")
    actions.classList.add("actions")
    sidebar.appendChild(actions)

    const firstH1 = document.createElement("h1")
    firstH1.innerText = "ACTIONS"
    actions.appendChild(firstH1)
    
    const firstAction = document.createElement("div")
    firstAction.classList.add("firstAction")
    firstAction.innerText = "Today"
    actions.appendChild(firstAction)

    const secondAction = document.createElement("div")
    secondAction.classList.add("secondAction")
    secondAction.innerText = "Upcoming"
    actions.appendChild(secondAction)

    const history = document.createElement("div")
    history.classList.add("history")
    sidebar.appendChild(history)
    
    const secondH1 = document.createElement("h1")
    secondH1.innerText = "HISTORY"
    history.appendChild(secondH1)

    const ul = document.createElement("ul")
    sidebar.appendChild(ul)


    return sidebar, sidebarTop
}

export { Sidebar } 
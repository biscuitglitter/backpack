const Container = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.id = "container"
    content.appendChild(container)

    const current = document.createElement("h2")
    current.id = ("current-tab")
    container.appendChild(current)
    
    const taskbutton = document.createElement("button")
    taskbutton.id = "cta"
    taskbutton.innerText = "+   " + "Add to-do"
    container.appendChild(taskbutton)

    return container
}

export { Container } 
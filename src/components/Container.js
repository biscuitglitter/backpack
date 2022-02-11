const Container = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.id = "container"
    content.appendChild(container)

    const current = document.createElement("h2")
    current.classList.add("current")
    container.appendChild(current)

    const taskcontainer = document.createElement("div")
    taskcontainer.id = "task-container"
    container.appendChild(taskcontainer)

    return container
}

export { Container } 
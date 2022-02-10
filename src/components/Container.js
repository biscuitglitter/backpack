const Container = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.id = "container"
    content.appendChild(container)

    const titleDate = document.createElement("h2")
    titleDate.classList.add("title-date")
    titleDate.innerText = "..."
    container.appendChild(titleDate)

    const taskcontainer = document.createElement("div")
    taskcontainer.id = "task-container"
    container.appendChild(taskcontainer)


    return container
}

export { Container } 
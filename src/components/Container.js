const Container = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.id = "container"
    content.appendChild(container)

    const titleDate = document.createElement("h2")
    titleDate.classList.add("title-date")
    titleDate.innerText = "Today"
    container.appendChild(titleDate)

    const taskContainer = document.createElement("div")
    taskContainer.id = "taskContainer"
    container.appendChild(taskContainer)


    return container
}

export { Container } 
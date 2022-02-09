const TaskButton = () => {
    const container = document.getElementById("container")

    const button = document.createElement("button")
    button.innerText = "+"
    button.classList.add("taskButton")
    container.appendChild(button)

    return button
}

export { TaskButton }
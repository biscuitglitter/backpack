const TaskButton = () => {
    const container = document.getElementById("container")

    const contain = document.createElement("div")
    contain.classList.add("buttonContainer")
    container.appendChild(contain)

    const button = document.createElement("button")
    button.innerText = "+"
    button.classList.add("taskButton")
    button.id = "taskButton"
    contain.appendChild(button)

    return contain, button
}

export { TaskButton }
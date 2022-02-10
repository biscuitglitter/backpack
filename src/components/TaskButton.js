const TaskButton = () => {
    const actions = document.getElementById("actions")

    const contain = document.createElement("div")
    contain.classList.add("buttonContainer")
    actions.appendChild(contain)

    const button = document.createElement("button")
    button.innerText = "Add project"
    button.classList.add("taskButton")
    button.id = "taskButton"
    contain.appendChild(button)

    return contain, button
}

export { TaskButton }
const TaskButton = () => {
    const sidebardiv = document.getElementById("sidebardiv")

    const contain = document.createElement("div")
    contain.classList.add("buttonContainer")
    sidebardiv.appendChild(contain)

    const button = document.createElement("button")
    button.innerText = "Add project"
    button.classList.add("taskButton")
    button.id = "taskButton"
    contain.appendChild(button)

    return contain, button
}

export { TaskButton }
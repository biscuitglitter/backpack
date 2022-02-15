const Buttons = () => {
    const projects = document.getElementById("projects")

    const btn_container = document.createElement("div")
    btn_container.id = ("btn-container")
    projects.appendChild(btn_container)

    const projectsbtn = document.createElement("button")
    projectsbtn.innerText = "+"
    projectsbtn.id = "add-project"
    btn_container.appendChild(projectsbtn)

    return btn_container
}

export { Buttons }
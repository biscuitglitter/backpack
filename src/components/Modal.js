const Modal = () => {
    const content = document.getElementById("content")

    const modal_container = document.createElement("div")
    modal_container.id = "modal-container"
    content.appendChild(modal_container)

    const modal = document.createElement("div")
    modal.id = "modal"
    modal_container.appendChild(modal)

    // const title_container = document.createElement("div")
    // title_container.id = "title-container"
    // modal.appendChild(title_container)

    // const title = document.createElement("div")
    // title.id = "addproject-title"
    // title_container.appendChild(title)
    // title.innerText = ""

    const modal_stuff = document.createElement("div")
    modal_stuff.id = "modal-stuff"
    modal.appendChild(modal_stuff)

    const projectName = document.createElement("input")
    projectName.id = "project-name"
    projectName.placeholder = "What are you working on?"
    modal_stuff.appendChild(projectName)

    const modal_footer = document.createElement("div")
    modal_footer.id = "modal-footer"
    modal.appendChild(modal_footer)

    const buttons = document.createElement("div")
    buttons.id = "buttons-container"
    modal_footer.appendChild(buttons)

    const close_button = document.createElement("div")
    close_button.id = "cancel"
    buttons.appendChild(close_button)
    close_button.innerText = "Cancel"

    const add_button = document.createElement("div")
    add_button.id = "add"
    buttons.appendChild(add_button)
    add_button.innerText = "Add"
   
    return modal_container 
}

export { Modal } 
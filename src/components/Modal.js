const Modal = () => {
    const content = document.getElementById("content")

    const modal_container = document.createElement("div")
    modal_container.id = "modal-container"
    content.appendChild(modal_container)

    const modal = document.createElement("div")
    modal.id = "modal"
    modal_container.appendChild(modal)

    const close_container = document.createElement("div")
    close_container.id = "close-container"
    modal.appendChild(close_container)

    const title = document.createElement("div")
    title.id = "project-title"
    close_container.appendChild(title)
    title.innerText = "New Project"

    const close_button = document.createElement("div")
    close_button.id = "close"
    close_container.appendChild(close_button)
    close_button.innerText = "X"

    const modal_stuff = document.createElement("div")
    modal_stuff.id = "modal-stuff"
    modal.appendChild(modal_stuff)

    const modal_footer = document.createElement("div")
    modal_footer.id = "modal-footer"
    modal.appendChild(modal_footer)
   
    return modal_container 
}

export { Modal } 
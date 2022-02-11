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

    const close_button = document.createElement("div")
    close_button.id = "close"
    close_container.appendChild(close_button)
    close_button.innerText = "X"

    const modaltext = document.createElement("h1")
    modal.appendChild(modaltext)
   
    return modal_container 
}

export { Modal } 
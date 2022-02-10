const Modal = () => {
    const content = document.getElementById("content")

    const modal_container = document.createElement("div")
    modal_container.id = "modal-container"
    content.appendChild(modal_container)

    const modal = document.createElement("div")
    modal.id = "modal"
    modal_container.appendChild(modal)

    const modaltext = document.createElement("h1")
    modaltext.innerText = "hi"
    modal.appendChild(modaltext)
    
    return modal_container 
}

export { Modal } 
const Container = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.id = "container"
    content.appendChild(container)

    const current = document.createElement("h2")
    current.id = ("current-tab")
    container.appendChild(current)
    
    return container
}

export { Container } 

const Content = () => {
    const content_container = document.createElement("div")
    document.body.appendChild(content_container)
    content_container.id = "content-container"

    const content = document.createElement("div")
    content.id = "content"
    content_container.appendChild(content)

    return content_container
}

export { Content } 
const Content = () => {
    const content = document.createElement("div")
    document.body.appendChild(content)
    content.id = "content"
    console.log(content)
    return content
}

export { Content } 
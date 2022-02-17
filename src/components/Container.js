const Container = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.id = "container"
    content.appendChild(container)

    const current = document.createElement("h2")
    current.id = ("current-tab")
    container.appendChild(current) 

    const welcome_screen = document.createElement("div")
    const p = document.createElement("p")
    const s = document.createElement("s")
    p.classList.add("welcome-text")
    s.classList.add("small-text")
    welcome_screen.id = "welcome"
    p.innerText = "Welcome!"
    s.innerText = "We know you're busy, and we want to help."
    content.appendChild(welcome_screen)
    welcome_screen.appendChild(p)
    welcome_screen.appendChild(s)

    return container
}

export { Container } 
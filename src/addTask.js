const addTask = () => { 
    const container = document.getElementById("task-container")
    
    const task = document.createElement("div")
    task.classList.add("task")
    container.appendChild(task)

    const details = document.createElement("details")
    task.appendChild(details)

    const summary = document.createElement("summary")
    details.appendChild(summary)

    const input = document.createElement("div")
    input.classList.add("input")
    summary.appendChild(input)

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";

    input.appendChild(checkbox)

    const more = document.createElement("div")
    more.classList.add("more")
    more.innerText = "more"
    details.appendChild(more)

    return task
}

export { addTask }

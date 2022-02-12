const Modal = () => {
    const content = document.getElementById("content")

    /* modal one */

    const modal_container_one = document.createElement("div")
    modal_container_one.id = "modal-container-one"
    content.appendChild(modal_container_one)

    const modal_one = document.createElement("div")
    modal_one.id = "modal-one"
    modal_container_one.appendChild(modal_one)
    
    const modal_stuff = document.createElement("div")
    modal_stuff.id = "modal-stuff"
    modal_one.appendChild(modal_stuff)

    const projectName = document.createElement("input")
    projectName.id = "project-name"
    projectName.placeholder = "What are you working on?"
    modal_stuff.appendChild(projectName)

    const modal_footer_one = document.createElement("div")
    modal_footer_one.id = "modal-footer-one"
    modal_one.appendChild(modal_footer_one)

    const buttons_project = document.createElement("div")
    buttons_project.id = "buttons-project"
    modal_footer_one.appendChild(buttons_project)

    const close_button = document.createElement("div")
    close_button.id = "close"
    buttons_project.appendChild(close_button)
    close_button.innerText = "Cancel"

    const add_button = document.createElement("div")
    add_button.id = "add"
    buttons_project.appendChild(add_button)
    add_button.innerText = "Add"

    /* modal two */

    const modal_container_two = document.createElement("div")
    modal_container_two.id = "modal-container-two"
    content.appendChild(modal_container_two)

    const modal_two = document.createElement("div")
    modal_two.id = "modal-two"
    modal_container_two.appendChild(modal_two)

    const modal_questions = document.createElement("div")
    modal_questions.id = "modal-questions"
    modal_two.appendChild(modal_questions)

    const title = document.createElement("input")
    title.id = "todo-title"
    title.placeholder = "What do you want to name it?"
    modal_questions.appendChild(title)

    const description = document.createElement("input")
    description.id = "todo-description"
    description.placeholder = "How would you describe it?"
    modal_questions.appendChild(description)

    const priority = document.createElement("div")
    priority.id = "priority-container"
    modal_questions.appendChild(priority)

    const text = document.createElement("p")
    text.id = "todo-priority"
    text.innerText = "Priority"
    priority.appendChild(text)

    const dropdown = document.createElement("button")
    dropdown.id = "dropdown"
    dropdown.innerText = "▼"
    priority.appendChild(dropdown)

    const priority_content = document.createElement("div")
    priority_content.id = "priority-content"
    priority.appendChild(priority_content)

    const high = document.createElement("a")
    high.innerText = "High priority"
    const medium = document.createElement("a")
    medium.innerText = "Medium priority"
    const low = document.createElement("a")
    low.innerText = "Low priority"

    priority_content.appendChild(high)
    priority_content.appendChild(medium)
    priority_content.appendChild(low)

    const modal_footer_two = document.createElement("div")
    modal_footer_two.id = "modal-footer-two"
    modal_two.appendChild(modal_footer_two)

    const buttons_questions = document.createElement("div")
    buttons_questions.id = "buttons-questions"
    modal_footer_two.appendChild(buttons_questions)

    const cancel_button = document.createElement("div")
    cancel_button.id = "cancel"
    buttons_questions.appendChild(cancel_button)
    cancel_button.innerText = "Cancel"

    const agree_button = document.createElement("div")
    agree_button.id = "agree"
    buttons_questions.appendChild(agree_button)
    agree_button.innerText = "Add to-do"
   
    return modal_container_one, modal_container_two
}

export { Modal } 
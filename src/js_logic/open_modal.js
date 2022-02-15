import { makeProject } from "./make_project";
import { makeTodo } from "./make_todos"

const Clear = () => {
  document.getElementById("todo-title").value = "";
  document.getElementById("project-name").value = "";
}

const openModal = () => {  
  const modal_one = document.getElementById("modal-container-one");
  const modal_two = document.getElementById("modal-container-two");

  const close_project_modal = document.getElementById("close");
  const cancel = document.getElementById("cancel")
  const add_project = document.getElementById("add-project");
  const confirm_project = document.getElementById("confirm-project");
  const confirm_todo = document.getElementById("confirm-todo");

  const dropdown = document.getElementById("dropdown")
  const priority_content = document.getElementById("priority-content")

  const addtodo_button = document.getElementById("addtodo-button")

  add_project.addEventListener("click", () => {
    modal_one.classList.add("show");
  });

  close_project_modal.addEventListener("click", () => {
    modal_one.classList.remove("show");
  });

  confirm_project.addEventListener("click", () => {
    modal_one.classList.remove("show")
    makeProject()
  });
  
  confirm_todo.addEventListener("click", () => {
    modal_two.classList.remove("show")
    makeTodo()
    Clear()
  });

  addtodo_button.addEventListener("click", () => {
    modal_one.classList.remove("show")
    modal_two.classList.add("show")
  });

  cancel.addEventListener("click", () => {
    modal_two.classList.remove("show")
    modal_one.classList.remove("show")
  })

  dropdown.addEventListener("click", () => {
    priority_content.classList.add("show")
  })
}

const Priority = () => {
  const priorities = document.querySelectorAll("a")
  const todo_priority = document.getElementById("todo-priority")
  const priority_content = document.getElementById("priority-content")

  priorities.forEach(priority => {
    priority.addEventListener("click", () => {
      let choice = priority.innerText
      todo_priority.innerText = choice
      priority_content.classList.remove("show")
    })
  })
}

export { openModal, Priority, Clear };
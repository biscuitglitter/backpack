import { makeProject } from "./make_project";
import { makeTodo } from "./make_todos"

const Clear = () => {
  document.getElementById("todo").value = "";
  document.getElementById("project-name").value = "";
}

const removingTodos = () => {
  document.querySelectorAll("#x-button").forEach((item) => {
    item.addEventListener("click", () => {
      const clicked = item.parentElement.parentElement
      if (document.querySelector("#welcome.activate")) {
        document.getElementById("welcome").classList.remove("activate")
        document.getElementById("current-tab").innerText = "";
      }
      clicked.remove()
    })
  })
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
  const overlay = document.querySelector(".overlay.hide")
  const todo_priority = document.getElementById("todo-priority")

  add_project.addEventListener("click", () => {
    modal_one.classList.add("show");
    overlay.classList.remove("hide");
    document.getElementById("welcome").classList.remove("activate")
  });

  close_project_modal.addEventListener("click", () => {
    modal_one.classList.remove("show");
    overlay.classList.add("hide");
  });

  confirm_project.addEventListener("click", () => {
    modal_one.classList.remove("show")
    overlay.classList.add("hide");
    makeProject()
  });
  
  confirm_todo.addEventListener("click", () => {
    modal_two.classList.remove("show")
    makeTodo()
    todo_priority.innerText = "Priority"
    Clear()
    overlay.classList.add("hide");
    removingTodos()
  });

    addtodo_button.addEventListener("click", () => {
    if (document.getElementById("todo").value === "") return
    modal_one.classList.remove("show")
    modal_two.classList.add("show")
    overlay.classList.remove("hide")
    document.getElementById("welcome").classList.remove("activate")
  });

  cancel.addEventListener("click", () => {
    modal_two.classList.remove("show")
    modal_one.classList.remove("show")
    overlay.classList.add("hide");
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

export { openModal, Priority, Clear, removingTodos };
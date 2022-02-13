const openModal = () => {
  const modal_one = document.getElementById("modal-container-one");
  const modal_two = document.getElementById("modal-container-two");

  const close = document.getElementById("close");
  const cancel = document.getElementById("cancel")
  const button = document.getElementById("projectsbtn");
  const add = document.getElementById("add");
  const agree = document.getElementById("agree");

  const dropdown = document.getElementById("dropdown")
  const priority_content = document.getElementById("priority-content")

  const addtodo_button = document.getElementById("addtodo-button")

  button.addEventListener("click", () => {
    modal_one.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_one.classList.remove("show");
  });

  add.addEventListener("click", () => {
    modal_one.classList.remove("show")
  });
  
  agree.addEventListener("click", () => {
    modal_two.classList.remove("show")
  });

  addtodo_button.addEventListener("click", () => {
    modal_one.classList.remove("show")
    modal_two.classList.add("show")
  });

  cancel.addEventListener("click", () => {
    modal_two.classList.remove("show");
    modal_one.classList.remove("show");
  });

  dropdown.addEventListener("click", () => {
    priority_content.classList.add("show")    

  });

};

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

const makeProject = () => {
  const add = document.getElementById("add");
  const projectName = document.getElementById("project-name")
  const projectsContainer = document.getElementById("projects-container")

  add.addEventListener("click", () => {
    const div = document.createElement("div")
    div.className = "task"
    const li = document.createElement("li")
    li.classList.add = "li"
    div.append(li)
    projectsContainer.appendChild(div)
    li.innerText = projectName.value
  });
}

const Clear = () => {
  document.getElementById("todo-title").value = "";
  document.getElementById("project-name").value = "";
}



export { openModal, makeProject, Priority, Clear };

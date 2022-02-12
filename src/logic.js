const openModal = () => {
  const modal = document.getElementById("modal-container");
  const close = document.getElementById("cancel");
  const button = document.getElementById("projectsbtn");

  button.addEventListener("click", () => {
    modal.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });

};

const makeProject = () => {
  const add = document.getElementById("add");
  const projectName = document.getElementById("project-name")
  const projectsContainer = document.getElementById("projects-container")

  add.addEventListener("click", () => {
    const div = document.createElement("div")
    div.className = "task"
    const li = document.createElement("li")
    div.append(li)
    projectsContainer.appendChild(div)
    li.innerText = projectName.value
  });
}


let Todo = class {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority
  }
}

const makeTodo = () => {
  todo = new Todo();
  todo.title = document.querySelector(".titleInput").value; 
  todo.description = document.querySelector(".descriptionInput").value;
  todo.priority = document.querySelector(".priorityInput").value;
};

const addTodo = (task) => {
  const pcontainer = document.getElementById("projects-container")
  const todo_container = document.createElement("div")
  todo_container.id = "todo-container"
  pcontainer.appendChild(todo_container)
}

const displayProject = () => {
  let array = []
}


export { openModal, makeProject };

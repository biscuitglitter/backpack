const addProject = () => {
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

let Todo = class {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority
  }
}

const makeTodo = () => {
  project = new Todo();
  project.title = document.querySelector(".titleInput").value; 
  project.description = document.querySelector(".descriptionInput").value;
  project.priority = document.querySelector(".priorityInput").value;
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


export {  };

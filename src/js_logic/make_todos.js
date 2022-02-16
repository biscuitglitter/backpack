let Todo = class {
  constructor(title, priority, project) {
    this.title = title;
    this.priority = priority;
    this.project = project;
  }
};

const makeTodo = () => {
  let task = new Todo(document.getElementById("todo-title").value, document.getElementById("todo-priority").innerText, document.querySelector(".selected").firstChild.innerText);

  const container = document.getElementById("container");
  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  wrapper.appendChild(checkbox);
  wrapper.dataset.target = "Home"

  const todo = document.createElement("p");
  todo.className = "todo-title";
  todo.innerText = `${task.title}`;

  console.log(task)

  document.querySelectorAll(".project").forEach((proj) => {
    if (task.project === proj.firstChild.innerText) {
      wrapper.dataset.target = proj.firstChild.innerText
    }
  }) 

  container.appendChild(wrapper);
  wrapper.appendChild(checkbox);
  wrapper.appendChild(todo);
};

export { makeTodo };


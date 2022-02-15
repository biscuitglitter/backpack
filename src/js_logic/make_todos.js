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

  const todo = document.createElement("p");
  todo.className = "todo-title";
  todo.innerText = `${task.title}`;

  console.log(task)

  container.appendChild(wrapper);
  wrapper.appendChild(checkbox);
  wrapper.appendChild(todo);
};

export { makeTodo };

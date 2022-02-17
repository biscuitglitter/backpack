let Todo = class {
  constructor(title, priority, project) {
    this.title = title;
    this.priority = priority;
    this.project = project;
  }
};

const makeTodo = () => {
  let value = document.getElementById("todo").value
  let task = new Todo(value,
    document.getElementById("todo-priority").innerText, document.querySelector(".selected").firstChild.innerText);
  
  const container = document.getElementById("container");
  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  const left_side = document.createElement("div")
  left_side.id = "left-side" 
  wrapper.appendChild(left_side)
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  wrapper.dataset.target = "Home"

  const todo = document.createElement("p");
  todo.className = "todo-title";
  todo.innerText = `${task.title}`

  const right_side = document.createElement("div")
  right_side.id = "right-side"  

  const priorities = document.createElement("div")
  priorities.id = "priorities" 
  const x_button = document.createElement("button")
  x_button.id = "x-button"
  x_button.innerText = "X"

  document.querySelectorAll(".project").forEach((proj) => {
    if (task.project === proj.firstChild.innerText) {
      wrapper.dataset.target = proj.firstChild.innerText
    }
  }) 

  container.appendChild(wrapper);
  wrapper.appendChild(left_side)
  left_side.appendChild(checkbox);
  left_side.appendChild(todo);
  wrapper.appendChild(right_side);
  right_side.appendChild(priorities)
  right_side.appendChild(x_button);

  if (task.priority === "High priority") {
    priorities.classList.add("high")
  } else if (task.priority === "Medium priority") {
    priorities.classList.add("medium")
  } else if (task.priority === "Low priority") {
    priorities.classList.add("low")
  }
};

const Bydefault = () => {
  let task = new Todo("Your first task", "High priority", "Home")

  const container = document.getElementById("container");
  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  const left_side = document.createElement("div")
  left_side.id = "left-side" 
  wrapper.appendChild(left_side)
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  wrapper.dataset.target = "Home"

  const todo = document.createElement("p");
  todo.className = "todo-title";
  todo.innerText = `${task.title}`

  const right_side = document.createElement("div")
  right_side.id = "right-side"  

  const priorities = document.createElement("div")
  priorities.id = "priorities" 
  priorities.classList.add("medium")
  const x_button = document.createElement("button")
  x_button.id = "x-button"
  x_button.innerText = "X"

  task.project = "Home"

  container.appendChild(wrapper);
  wrapper.appendChild(left_side)
  left_side.appendChild(checkbox);
  left_side.appendChild(todo);
  wrapper.appendChild(right_side);
  right_side.appendChild(priorities)
  right_side.appendChild(x_button);
}

export { makeTodo, Bydefault };



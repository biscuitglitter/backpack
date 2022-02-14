 let Todo = class {
     constructor(title, priority) {
       this.title = title;
       this.priority = priority
   }
 }
  
const addTodo = () => {
  let task = new Todo(document.getElementById("todo-title").value, document.getElementById("todo-priority").innerText);

  const container = document.getElementById("container")

  const wrapper = document.createElement("div")
  wrapper.id = "wrapper"

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.classList.add("checkbox")
  wrapper.appendChild(checkbox)
  
  const todo = document.createElement("p")
  
  todo.className = "todo-title"
  
  todo.innerText = `${task.title}`

  container.appendChild(wrapper)
  wrapper.appendChild(checkbox)
  wrapper.appendChild(todo)
}
  
export { addTodo };
  

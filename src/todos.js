 let Todo = class {
     constructor(title, description, priority) {
       this.title = title;
       this.description = description;
       this.priority = priority
   }
 }
  
const addTodo = () => {
  let task = new Todo(document.getElementById("todo-title").value, document.getElementById("todo-description").value, document.getElementById("todo-priority").innerText);
  console.log(task)

  const container = document.getElementById("container")

  const wrapper = document.createElement("div")
  wrapper.id = "wrapper"

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.classList.add("checkbox")
  wrapper.appendChild(checkbox)

  const details = document.createElement("details")
  details.classList.add("details")
  
  const summary = document.createElement("summary")
  
  summary.className = "summary-title"
  const description = document.createElement("p")
  
  summary.innerText = `${task.title}`
  description.innerText = `${task.description}`

  container.appendChild(wrapper)
  wrapper.appendChild(details)
  details.appendChild(summary)
  details.appendChild(description)
}
  
 export { addTodo };


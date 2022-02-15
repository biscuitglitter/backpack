let Project = class {
  constructor(title) {
    this.title = title;
  }
};


const makeProject = () => {
    const container = document.getElementById("projects-container");

    let project = new Project(document.getElementById("project-name").value);
    let project_todos = [];
    
    const proj = document.createElement("div")
    proj.className = "project"
    const text = document.createElement("p")
    text.className = "text"
    text.innerText = `${project.title}`

    project_todos.push(proj);

    console.log(proj)
    console.log(project_todos)

    container.appendChild(proj)
    proj.appendChild(text)   
};



 export { makeProject };

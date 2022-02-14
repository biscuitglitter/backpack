const makeProject = () => {
  let arr_project = [];
  const add = document.getElementById("add");
  const projectName = document.getElementById("project-name");
  const projectsContainer = document.getElementById("projects-container");

  add.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "project";
    const li = document.createElement("li");
    div.append(li);
    projectsContainer.appendChild(div);
    li.innerText = projectName.value;

    arr_project.push(div);
    for (let i = 0; i < arr_project.length; i++) {
      div.id = "target"+i; 
    }      
  });
};

export { makeProject };





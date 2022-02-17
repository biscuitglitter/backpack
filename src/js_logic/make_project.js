let Project = class {
  constructor(title) {
    this.title = title;
  }
};

const makeProject = () => {
  const container = document.getElementById("projects-container");
  let project = new Project(document.getElementById("project-name").value);
  const proj = document.createElement("div");
  proj.className = "project";
  const text = document.createElement("p");
  text.className = "text";
  text.innerText = `${project.title}`;
  proj.dataset.target = `${project.title}`;
  container.appendChild(proj);
  proj.appendChild(text);
};

const selectProject = () => {
  document.querySelectorAll(".project").forEach((item) => {
    item.addEventListener("click", (e) => {
      document.querySelectorAll(".project").forEach((project) => {
        project.classList.remove("selected");
        document.getElementById("home").classList.remove("selected");
        document.getElementById("home").classList.remove("currently");
      });
      const curr = e.target.parentNode;
      curr.classList.add("selected");
    });
  });
};

export { makeProject, selectProject };

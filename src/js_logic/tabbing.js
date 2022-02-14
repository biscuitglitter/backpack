const Tabbing = () => {
  let projects = document.querySelectorAll(".project")

  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      const current = e.target.parentNode
      current.classList.add("selected")
      console.log(current)
    })
  })
}

export { Tabbing }
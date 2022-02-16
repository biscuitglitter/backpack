const findTarget = () => {
    document.getElementById("projects-container").addEventListener("click", function (e) {
        const clicked_project_dataset = e.target.closest(".project").dataset.target
        const tab = document.getElementById("current-tab")
        tab.innerText = clicked_project_dataset
        const todo_dataset = document.querySelectorAll('#wrapper[data-target="' + `${clicked_project_dataset}` + '"]');
        document.querySelectorAll("#wrapper").forEach(a => a.style.display = "none")
        todo_dataset.forEach(t => t.style.display = "flex")
        if (!clicked_project_dataset) return
    })        
}

const displayAll = () => {
    document.getElementById("home").addEventListener("click", () => {
        if (!document.querySelectorAll("#wrapper")) return
        document.getElementById("home").classList.add("currently")
        document.querySelectorAll(".project").forEach(project => project.classList.remove("selected"))        
        document.querySelectorAll("#wrapper").forEach(a => a.style.display = "flex")
        document.getElementById("home").classList.add("selected")
        const tab = document.getElementById("current-tab")
        tab.innerText = "Home"
    })
}
  
export { findTarget, displayAll }


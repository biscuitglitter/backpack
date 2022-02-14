import { loading_page } from "./loading_page";
import { DayofWeek } from "./components/get_day";
import { openModal, Priority, Clear } from "./js_logic/modal";
import { makeProject } from "./js_logic/make_project";

loading_page();
DayofWeek();
makeProject();
openModal();
Priority();

const selectProject = () => {
  document.querySelectorAll(".project").forEach((item) => {
    item.addEventListener("click", (e) => {
      document.querySelectorAll(".project").forEach((project) => { 
        project.classList.remove("selected")
      })
      const curr = e.target.parentNode
      curr.classList.add("selected")
    })
  })
}

/* todos, projects */

const confirm_todo = document.getElementById("agree");
const confirm_project = document.getElementById("add");

confirm_todo.addEventListener("click", () => {
  Clear();
});

confirm_project.addEventListener("click", () => {
  Clear();
  selectProject()
});


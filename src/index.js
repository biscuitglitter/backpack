import { loading_page } from "./loading_page";
import { DayofWeek } from "./components/DayofWeek";
import { openModal, Priority, Clear } from "./js_logic/open_modal";

loading_page();
DayofWeek();
openModal();
Priority();

const selectProject = () => {
  document.querySelectorAll(".project").forEach((item) => {
    item.addEventListener("click", (e) => {
      document.querySelectorAll(".project").forEach((project) => { 
        project.classList.remove("selected")
        document.getElementById("home").classList.remove("selected")
      })
      const curr = e.target.parentNode
      curr.classList.add("selected")
    })
  })
}

const confirm_todo = document.getElementById("confirm-todo");
const confirm_project = document.getElementById("confirm-project");

confirm_todo.addEventListener("click", () => {
  Clear();
});

confirm_project.addEventListener("click", () => {
  Clear();
  selectProject()
});


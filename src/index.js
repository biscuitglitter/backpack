import { loading_page } from "./loading_page";
import { DayofWeek } from "./components/DayofWeek";
import { openModal, Priority, Clear } from "./js_logic/open_modal";
import { selectProject } from "./js_logic/make_project";
import { findTarget, displayAll } from "./js_logic/display_todos"
import { Bydefault } from "./js_logic/make_todos"
import { removingTodos } from "./js_logic/open_modal"

loading_page();

const overlay = document.createElement("div")
overlay.classList.add("overlay")
overlay.classList.add("hide")
document.body.appendChild(overlay)

DayofWeek();
openModal();
Priority();

const confirm_todo = document.getElementById("confirm-todo");
const confirm_project = document.getElementById("confirm-project");

confirm_todo.addEventListener("click", () => {
  Clear();
});

confirm_project.addEventListener("click", () => {
  Clear();
  selectProject();
});

displayAll()
findTarget()
Bydefault()
removingTodos()

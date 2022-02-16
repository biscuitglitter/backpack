import { loading_page } from "./loading_page";
import { DayofWeek } from "./components/DayofWeek";
import { openModal, Priority, Clear } from "./js_logic/open_modal";
import {selectProject } from "./js_logic/make_project"

loading_page();
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
  selectProject()
});



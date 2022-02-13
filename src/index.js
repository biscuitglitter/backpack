import { loading_page } from "./loading_content"
import { DayofWeek } from "./get_day"
import { openModal, makeProject, Priority, Clear } from "./logic"
import { addTodo } from "./todos"

loading_page()
DayofWeek()
openModal()
makeProject()
Priority()

const agree = document.getElementById("agree")
agree.addEventListener("click", () => {
    addTodo()
    Clear()
}
)

const modal_one = document.getElementById("modal-container-one");
const add = document.getElementById("add")
add.addEventListener("click", () => {
    modal_one.classList.remove("show")
    Clear()
  });


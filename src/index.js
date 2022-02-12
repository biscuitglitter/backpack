import { LoadingContent } from "./loading_content"
import { DayofWeek } from "./get_day"
import { openModal, makeProject, Priority, Clear } from "./logic"
import { addTodo } from "./todos"

LoadingContent()
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

const add = document.getElementById("add")
add.addEventListener("click", () => {
    modal_one.classList.remove("show")
    Clear()
  });


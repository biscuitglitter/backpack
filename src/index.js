import { LoadingContent } from "./loading_content"
import { DayofWeek } from "./get_day"
import { openModal, makeProject, Priority } from "./logic"
import { addTodo } from "./todos"

LoadingContent()
DayofWeek()
openModal()
makeProject()
Priority()

const agree = document.getElementById("agree")

agree.addEventListener("click", () => {
        addTodo()
    }
)

import { loading_page } from "./loading_page"
import { DayofWeek } from "./components/get_day"
import { openModal, Priority, Clear } from "./js_logic/modal"
import { makeProject } from "./js_logic/make_project"

loading_page()
DayofWeek()
openModal()
makeProject()
Priority()



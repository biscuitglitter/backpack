import "./style.css"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Container } from "./components/Container"
import { TaskButton } from "./components/TaskButton"
import { addTask } from "./addTask"


Content()
Sidebar()
Container()
TaskButton()

const taskButton = document.getElementById("taskButton")

taskButton.addEventListener("click", () => {
    addTask()
})
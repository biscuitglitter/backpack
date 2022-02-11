import "./style.css"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { Container } from "./components/Container"
import { TaskButton } from "./components/TaskButton"
import { Modal } from "./components/Modal"

const initialPage = () => {
    Navbar()
    Content()
    Sidebar()
    Container()
    TaskButton()
    Modal()
}

export { initialPage }

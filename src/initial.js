import "./style.css"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { Container } from "./components/Container"
import { Modal } from "./components/Modal"
import { addButtons } from "./components/Buttons"

const initialPage = () => {
    Navbar()
    Content()
    Sidebar()
    addButtons()
    Container()
    Modal()
}

export { initialPage }

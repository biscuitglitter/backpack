import "./style.css"
import { Content } from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { Container } from "./components/Container"
import { Modal } from "./components/Modal"
import { Buttons } from "./components/Buttons"

const initialPage = () => {
    Navbar()
    Content()
    Sidebar()
    Buttons()
    Container()
    Modal()
}

export { initialPage }

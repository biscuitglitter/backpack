import { Container } from "./components/Container"

const displayModal = () => {
    const button = document.getElementById("taskButton")
    const modal = document.getElementById("modal-container")
    const close = document.getElementById("close")

    button.addEventListener("click", () => {
        modal.classList.add("show")
    });

    close.addEventListener("click", () => {
        modal.classList.remove("show")
    })
}    
    
const displayToday = () => {
    const today = document.getElementById("today")

    let isSelected = false;

    today.addEventListener("click", () => {

    })
Container()
}
export { displayModal, displayToday }
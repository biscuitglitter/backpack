const Logic = () => {
    const button = document.getElementById("taskButton")
    const modal = document.getElementById("modal-container")

    button.addEventListener("click", () => {
        console.log(modal)
        modal.classList.add("show")
    });
}
      


export { Logic }
const Tabbing = () => {
    const todos = document.querySelectorAll(".task")
    const current_tab = document.getElementById("current-tab")
    const li = document.querySelectorAll("li")

    todos.forEach(todo => {
        todo.addEventListener("click", () => {
            console.log(todos)
            li.forEach(list => {
                current_tab.innerText = list.innerText
                console.log("each li?")
            })
        })
    }
    )
}
export { Tabbing }
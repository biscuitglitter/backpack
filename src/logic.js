const addProject = () => {
  const modal = document.getElementById("modal-container");
  const close = document.getElementById("cancel");
  const button = document.getElementById("projectsbtn");

  button.addEventListener("click", () => {
    modal.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });
};

export { addProject };

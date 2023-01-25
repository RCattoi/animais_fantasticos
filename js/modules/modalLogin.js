export default function openLoginModal() {
  let loginBtn = document.querySelector(".menulogin");
  let modal = document.querySelector("[data-modal='container']");
  const fecharModal = document.querySelector(".modal-container__fechar");
  const sectionAroundModal = document.querySelector(".modal-container");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.dataset.modalControl = "container-abrir";
  });

  fecharModal.addEventListener("click", () => {
    modal.dataset.modalControl = "container-fechar";
  });

  sectionAroundModal.addEventListener("click", (event) => {
    event.target.dataset.modal === "container"
      ? (modal.dataset.modalControl = "container-fechar")
      : "";
  });
}

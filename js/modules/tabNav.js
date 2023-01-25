export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-js='js-tabMenu'] img"),
    tabContent = document.querySelectorAll("[data-js='js-tabContent'] section");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("show-down", "show-right");
      });
      tabContent[index].dataset.anime === "show-down"
        ? tabContent[index].classList.add("show-down")
        : tabContent[index].classList.add("show-right");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

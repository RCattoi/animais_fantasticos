import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];
  function openMenu(event) {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("active");
    outsideClick(menuList, ["click", "touchstart"], () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }
  menuButton.addEventListener("click", openMenu);

  eventos.forEach((event) => menuButton.addEventListener(event, openMenu));
}

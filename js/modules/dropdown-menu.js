export default function dropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  const html = document.documentElement;

  dropdownMenu.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    clickHtml();
  }

  function clickHtml() {
    html.addEventListener("click", handleHtmlClick);
    function handleHtmlClick(event) {
      console.log(event);
      console.log(event.target);
    }
  }
}

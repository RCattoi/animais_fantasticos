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
    this.classList.add("ativo");
    clickHtml(this, () => {
      this.classList.remove("ativo");
    });
  }

  function clickHtml(element, callback) {
    const outside = "data-outside";
    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", handleHtmlClick);
      element.setAttribute(outside, "");
    }
    function handleHtmlClick(event) {
      if (!element.contains(event.target)) {
        callback();
        html.removeEventListener("click", handleHtmlClick);
      }
    }
  }
}

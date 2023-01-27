export default function dropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");

  dropdownMenu.forEach((menu) => {
    // element.addEventListener("touchstart", handleClick);
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    console.log(event);
    // return (dropdownMenu.style.display = "block");
  }
}

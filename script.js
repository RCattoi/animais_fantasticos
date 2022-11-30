const tabMenu = document.querySelectorAll(".js-tabMenu img");

function callback(event) {
  clickedImg = event.target;
  tabMenu.forEach((item) => {
    item.classList.remove("active");
    if (clickedImg === item) {
      item.classList.add("active");
    }
  });
}

addEventListener("click", callback);

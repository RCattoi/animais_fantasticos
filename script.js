const tabMenu = document.querySelectorAll(".js-tabMenu img");
const tabcontent = document.querySelectorAll(".js-tabContent section");

// function callback(event) {
//   clickedImg = event.target;
//   console.log(clickedImg);
//   tabMenu.forEach((item) => {
//     item.classList.remove("active");
//     if (clickedImg === item) {
//       item.classList.add("active");
//     }
//   });
// }

// addEventListener("click", callback);
// console.log(tabMenu.indexOf("img.active"));

tabcontent.forEach((item) => {
  // item.classList.remove("active");
  item.style.display = "none";
});

function callback(event) {
  clickedImg = event.target;
  console.log(clickedImg);
  tabcontent.forEach((item) => {
    item.classList.remove("active");
    item.style.display = "none";
  });
  tabMenu.forEach((item, position) => {
    item.classList.remove("active");
    if (clickedImg === item) {
      tabcontent[position].classList.add("active");
      tabcontent[position].style.display = "block";
    }
  });
}

addEventListener("click", callback);

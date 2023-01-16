function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabMenu img"),
    tabContent = document.querySelectorAll(".js-tabContent section");

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

initTabNav();

function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");

    function activeAccordion(event) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordionList();
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
function initAnimaScroll() {
  const section = document.querySelectorAll(".js-scroll");
  if (section.length) {
    function animatedScroll() {
      section.forEach((item) => {
        const screenHeight = window.innerHeight * 0.6;
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - screenHeight;
        if (isSectionVisible < 0) {
          item.classList.add("animar");
        }
      });
    }
    window.addEventListener("scroll", animatedScroll);
  }
}
initAnimaScroll();

function DomSelector(selector) {
  this.htmlObject = selector;
  this.element = function () {
    return document.querySelectorAll(this.htmlObject);
  };
  this.addInHtmlObject = function () {
    this.element().classList.add("active");
  };
}

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-js='js-menu'] a[href^='#']"
  );

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

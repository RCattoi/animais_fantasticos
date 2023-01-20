export default function initAnimaScroll() {
  const section = document.querySelectorAll("[data-js='js-scroll']");
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

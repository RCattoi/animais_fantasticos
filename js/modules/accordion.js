export default function initAccordionList() {
  const accordionList = document.querySelectorAll(
    "[data-js='js-accordion'] dt"
  );

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

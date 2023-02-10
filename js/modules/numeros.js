export default function initAnimaNumeros() {
  function aanimaNumeros() {
    const numeros = document.querySelectorAll(".numeros-animal span");
    let timer;
    function animacaoNumero(animalValor, item) {
      let contador = 0;
      let incremento = Math.floor(animalValor / 100);

      timer = setInterval(() => {
        item.innerHTML = contador;
        contador = contador + incremento;
        if (contador > animalValor) {
          item.innerHTML = animalValor;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    }
    numeros.forEach((item) => {
      const numerosValor = +item.innerHTML;
      animacaoNumero(numerosValor, item);
    });
  }
}
function handleMutation(mutation) {
  if (mutation[0].target.classList.contains("animar")) {
    aanimaNumeros();
    observer.disconnect;
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}

export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll(".numeros-animal span");
  let timer,
    contador = 0;

  function initAnimaisNumeros(animalValor, item) {
    timer = setInterval(() => {
      item.innerHTML = contador;
      contador <= animalValor ? (contador += 1) : clearInterval(timer);
    });
  }
  numeros.forEach((item) => {
    const numerosValor = +item.innerHTML;
    initAnimaisNumeros(numerosValor, item);
  });
}

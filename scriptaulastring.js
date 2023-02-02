// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const timerHtml = document.querySelector("p");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const resetar = document.querySelector(".resetar");

// setInterval(() => {
//   if (html.style.background === "red") {
//     html.style.background = "blue";
//   } else {
//     html.style.background = "red";
//   }
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// let i = 0;
// let startTimer = setInterval(() => {
//   timer.innerText = i++;
// }, 1000);

iniciar.addEventListener("click", iniciarTempo);
resetar.addEventListener("click", resetarTempo);
pausar.addEventListener("dblclick", pausarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    timerHtml.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}
function resetarTempo() {
  i = 0;
  timerHtml.innerText = 0;
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}

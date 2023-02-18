export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const arrDiasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const arrHoras = funcionamento.dataset.horario.split(",").map(Number);

  const dataHoje = new Date();
  const diaAgora = dataHoje.getDay();
  const horaAgora = dataHoje.getHours();
  const diaAberto = arrDiasSemana.includes(diaAgora);
  const horarioAberto = horaAgora >= arrHoras[0] && horaAgora < arrHoras[1];

  if (diaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.add("fechado");
  }
}

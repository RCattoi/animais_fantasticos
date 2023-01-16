// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const pageSectionText = document.querySelector("section").innerHTML,
  removedParagraph = pageSectionText
    .replaceAll("<p>", "")
    .replaceAll("</p>", "")
    .split("");
const charCount = removedParagraph.reduce((previusValue, element, index) => {
  return index;
}, 0);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
const Dom = document.querySelector();

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

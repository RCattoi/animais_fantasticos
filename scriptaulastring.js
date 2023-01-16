// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.round(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
let numeros = "4, 5, 20, 8, 9";
numeros = numeros.split(", ");
let newArrNumeros = [];
numeros.forEach((element) => {
  newArrNumeros.push(+element);
});
console.log(Math.max(...newArrNumeros));
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];
var totalValueListaPrecos = 0;
listaPrecos.forEach((element) => {
  let lowerCaseElement = element.toLowerCase(),
    onlyNumberElement = lowerCaseElement.replace("r$", ""),
    toNumberElement = Math.round(Number.parseFloat(onlyNumberElement));
  console.log(toNumberElement);
  totalValueListaPrecos += toNumberElement;
});

console.log(totalValueListaPrecos);

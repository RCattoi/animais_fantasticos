// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoess = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
var finalValueTax = 0;
var finalValueRecip = 0;

transacoess.forEach((item) => {
  let itemValue = +item.valor.replace("R$ ", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    finalValueTax += itemValue;
  } else {
    finalValueRecip += itemValue;
  }
});

console.log(finalValueRecip);
console.log(finalValueTax);
// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
let transportesArr = transportes.split(";");
console.log(transportesArr);
// Substitua todos os span's por a's

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
let newHtml = html.split("span");
console.log(newHtml);
console.log(newHtml.join("a"));
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[frase.length - 1]);
// Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
orders = transacoes.join(",");
orders = orders.toLowerCase().match(/taxa/g || []).length;

// let contagem = orders.match(/taxa/g || []).length;
console.log(orders);

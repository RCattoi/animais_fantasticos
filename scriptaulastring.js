// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btnBuscar = document.querySelector("[type='button']");

btnBuscar.addEventListener("click", handleClick);

function handleClick() {
  const cep = document.querySelector("#cep").value.replaceAll("-", "");
  let rua = document.querySelector("#rua");
  let complemento = document.querySelector("#complemento");
  let bairro = document.querySelector("#bairro");
  let cidade = document.querySelector("#cidade");
  let estado = document.querySelector("#estado");
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((cep) => {
      rua.value = cep.logradouro;
      complemento.value = cep.complemento;
      bairro.value = cep.bairro;
      cidade.value = cep.localidade;
      estado.value = cep.uf;
    });
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
let bitcoinValue = document.querySelector(".bitcoinValue");
setInterval(function () {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((response) => {
      bitcoinValue.innerText = response.BRL.buy;
    });
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnRandomJoke = document.querySelector(".cn");
const newJoke = document.querySelector(".joke");
btnRandomJoke.addEventListener("click", selectJoke);

function selectJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((jokes) => (newJoke.innerText = jokes.value));
}
// function
// https://api.chucknorris.io/jokes/random

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pokemonImg = document.querySelector(".poke img");
fetch(`https://pokeapi.co/api/v2/pokemon/6`)
  .then((r) => r.json())
  .then((pokemon) => {
    let pokeResponseImg = pokemon.sprites.front_default;
    pokemonImg.src = pokeResponseImg;
  });

options = {
  method: "GET",
  headers: {
    // "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": "true",
  },
};

async function planoDeFundo() {
  try {
    const dadosResponse = await fetch(
      `https://www.bing.com/HPImageArchive`,
      options
    );
    const imagem = await dadosResponse.json().images;
    // pokemonImg.src = dadosPoke.sprites.front_shiny;
    console.log(imagem);
  } catch (erro) {
    console.log(erro);
  }
}
planoDeFundo();

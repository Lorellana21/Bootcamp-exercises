"use strict";

function getInteger() {
  fetch("https://api.rand.fun/number/integer?min=0&max=10000")
    .then(response => response.html())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
}
document.querySelector('.js-button').addEventListener("click", getInteger);

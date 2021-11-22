'use strict';

function getInteger() {
    fetch("https://api.rand.fun/number/integer?min=0&max=10000")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result
      });
  }
  document.querySelector('.js-button').addEventListener("click", getInteger);
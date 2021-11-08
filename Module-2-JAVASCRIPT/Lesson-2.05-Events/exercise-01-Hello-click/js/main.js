'use strict';


const pElement = document.querySelector (".js-text");
console.log (pElement);
const buttonElement = document.querySelector (".js-button");
console.log(buttonElement);

buttonElement.addEventListener("click", () => {pElement.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!"});
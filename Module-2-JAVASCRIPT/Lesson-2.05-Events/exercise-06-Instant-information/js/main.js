'use strict';

const inputElement = document.querySelector(".input");
const pElement = document.querySelector (".text");

function writeCharacter(event) {
    let character = event.currentTarget.value;
    pElement.innerHTML = character;
    console.log(pElement);
}

inputElement.addEventListener("keydown", writeCharacter);




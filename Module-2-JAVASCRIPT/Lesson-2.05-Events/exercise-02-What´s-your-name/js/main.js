'use strict';


const inputElement = document.querySelector (".js-input");
const buttonElement = document.querySelector (".js-button");

function handlerInput(){
    const inputValue = inputElement.value;
    console.log(`Hola ${inputValue}`);
}


buttonElement.addEventListener ("click", handlerInput);
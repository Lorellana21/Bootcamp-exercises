'use strict';

const buttonElement = document.querySelector (".js-button");

function handleClass(event){
    buttonElement.classList.toggle("yellow");
}



buttonElement.addEventListener("click", handleClass);




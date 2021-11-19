'use strict';

const buttons = document.querySelectorAll(".js-button");
const body = document.querySelector (".body");


function handleBackground(event){
  body.classList.toggle("background-red");
}

for (const button of buttons){
   button.addEventListener("click", handleBackground);
}






'use strict';

const listElement = document.querySelector(".js-list");


function stopLink(event){
  event.preventDefault();
  console.log("este link no hace nada");
}


listElement.addEventListener("click", stopLink);



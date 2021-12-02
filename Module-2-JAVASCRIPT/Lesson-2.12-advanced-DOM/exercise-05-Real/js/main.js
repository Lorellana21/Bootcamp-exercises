'use strict';


const listElement = document.querySelector(".js-list");


function stopLink(event){
  event.preventDefault();
  console.log("este link no hace nada");
}


listElement.addEventListener("click", stopLink);

const domRect = listElement.getBoundingClientRect();
console.log(domRect);
window.scrollTo(0, 34);




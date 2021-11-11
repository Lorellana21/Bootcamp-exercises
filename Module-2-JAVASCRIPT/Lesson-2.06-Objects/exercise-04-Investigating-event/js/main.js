'use strict';

const buttonElement = document.querySelector(".js-button");


function paintEvent(event){
  console.log(event);
  console.log(event.type);//Es una propiadad
}
//La propiedad type devuelve una cadena de texto 
//que contiene el tipo de evento. 
//Se establece cuando se construye el evento y es el nombre 
//que se utiliza normalmente para referirse al evento en cuestión, 
//como click, load o error. En el ejemplo es type: "click"



buttonElement.addEventListener("click", paintEvent)
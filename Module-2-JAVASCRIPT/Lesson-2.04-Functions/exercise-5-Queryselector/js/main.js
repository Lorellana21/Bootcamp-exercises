'use strict';

///Esta función recibe por parámetro un selector de css y retornará el elemento de HTML correspondiente. 
function getEl(sel){
  return document.querySelector(sel);
}


const titleElement = getEl('.js-title');
console.log(titleElement);

titleElement.innerHTML = "Hola";
'use strict';

 
function getEl(sel){
  return document.querySelector(sel);
}


const titleElement = getEl('.js-title');
console.log(titleElement);
titleElement.innerHTML = "Hola";

const textElement = getEl('.js-text');
console.log(textElement);
textElement.innerHTML = "soy yo";

const listElement = getEl('.js-list');
console.log(listElement);

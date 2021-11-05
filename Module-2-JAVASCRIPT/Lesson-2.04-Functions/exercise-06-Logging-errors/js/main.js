'use strict';

 
function getEl(sel){
  const element = document.querySelector(sel);
  if(element === null){
   console.error(`No existe ningún elemento con clase, id o tag llamado ${sel}`);
  } else if (element !== null) {
    return element;
  }
}

const htmlElement = getEl("js-title");
// console.log(htmlElement);
// htmlElement.innerHTML = "Hola";







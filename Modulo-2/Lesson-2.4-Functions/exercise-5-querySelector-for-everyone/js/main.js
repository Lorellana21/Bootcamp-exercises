'use strict';

//Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.

//Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:
  


function getEl(sel){
  return document.querySelector(sel);
}


const titleElement = getEl('.js-title');
console.log(titleElement);

titleElement.innerHTML = "Hola";







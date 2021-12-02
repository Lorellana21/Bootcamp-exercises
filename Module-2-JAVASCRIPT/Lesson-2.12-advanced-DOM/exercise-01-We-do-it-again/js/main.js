'use strict';


const numbers = [1, 2, 3];

//Opción 1
const newItem = document.createElement("li");
const newContent = document.createTextNode(numbers[0]);
newItem.appendChild(newContent);
console.log(newItem);

const newItem2 = document.createElement("li");
const newContent2 = document.createTextNode(numbers[1]);
newItem2.appendChild(newContent2);
console.log(newItem2);

const newItem3 = document.createElement("li");
const newContent3 = document.createTextNode(numbers[2]);
newItem3.appendChild(newContent3);
console.log(newItem3);

const items = document.querySelector(".items");
items.appendChild(newItem);
items.appendChild(newItem2);
items.appendChild(newItem3);

//Opción 2
const list = document.querySelector(".items");

for (const number of numbers) {
  // Creamos un elemento li para cada dato del array
  const newItem = document.createElement("li");
  // Creamos contenido con cada elemento del array
  const newContent = document.createTextNode(number);
  // Metemos cada contenido del array dentro de cada elemento li
  newItem.appendChild(newContent);
  // Metemos los elementos li en el html, dentro de nuestra ul llamada list
  list.appendChild(newItem);
}
`use strict`;

/*Crear una página HTML con una lista ul vacía*/

//Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3].
const numbers = [1, 2, 3];

//Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.

const newItem = document.createElement("li");
const newContent = document.createTextNode(numbers[0]);
newItem.appendChild(newContent);

const newItem2 = document.createElement("li");
const newContent2 = document.createTextNode(numbers[1]);
newItem2.appendChild(newContent2);

const newItem3 = document.createElement("li");
const newContent3 = document.createTextNode(numbers[2]);
newItem3.appendChild(newContent3);

const items = document.querySelector(".items");
items.appendChild(newItem);
items.appendChild(newItem2);
items.appendChild(newItem3);

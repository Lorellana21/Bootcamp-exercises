'use strict';

//Poner la edad en el HTML
const myAge = document.querySelector("body");
myAge.innerHTML = "39";
//Pasar la edad a número
const number = parseInt(myAge.innerHTML);

//Calcular númerod e horar por año
const day = 24;
const year = 365;

const hoursPerYear = day * year;


//Resultado final:
console.log(`Lorena ha vivido ${hoursPerYear * number}`);







'use strict';

const mate = "María";

//Esto solo sale en consola:
console.log("Hola " + mate + ", encantada de conocerte.");

//Aquí se pinta en la página:
const hello = document.querySelector("body");

hello.innerHTML +=
  "<h1>Hola <span class='js-lola'>Lola</span>, encantada de conocerte.</h1>";

const lola = document.querySelector(".js-lola");
lola.innerHTML = "Lorena";

console.log(lola);





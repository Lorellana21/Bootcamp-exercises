'use strict';

const mate = "María";

//Esto solo sale en consola:
console.log(`Hola ${mate} , encantada de conocerte.`);

//Aquí se pinta en la página:
const hello = document.querySelector("body");
const myName = "Lorena";

hello.innerHTML +=
  "<h1>Hola <span class='js-lola'>Lola</span>, encantada de conocerte.</h1>";

  // ES5
hello.innerHTML = '<h1>Hola ' + myName + ', encantada de conocerte.</h1>';

// ES6
hello.innerHTML = `<h1>Hola  ${myName}, encantada de conocerte.</h1>`;


console.log(hello);





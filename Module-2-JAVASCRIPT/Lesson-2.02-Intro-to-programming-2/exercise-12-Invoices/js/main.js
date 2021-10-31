'use strict';

//declaro todas las variables que recogen información del HTML
const input = document.querySelector(".js-pago");
const resultHtml = document.querySelector('.js-result');
const inputValue = parseInt(input.value);
const namePerson2 = "ivan";

// estas no las recojo del HTML por eso no son String, son tipo Number directamente, por eso no van entre comillas
const alquiler = 1000; 
const luz = 100;
const agua = 50;

const resultadoTotal = (alquiler + luz + agua) / 2;
console.log(resultadoTotal);

const resta = inputValue - resultadoTotal;

/*resultHtml.innerHTML = "Josefina debe pagar " + resultadoTotal + " y le queda " + resta; */
resultHtml.innerHTML = `Josefina debe pagar ${resultadoTotal} y le queda ${resta}`;

console.log(document.querySelector('textarea').value);
//agua = 50 + 10;
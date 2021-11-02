"use strict";

const input = document.querySelector(".js-age");//Recojo el valor del input
const ageValue = parseInt(input.value);//Cojo su valor y lo paso a número
console.log(ageValue);


//Defino como constantes los 3 mensajes:
const resultStop = document.querySelector(".js-result-stop");
const resultGo = document.querySelector(".js-result-go");
const resultMax = document.querySelector(".js-result-max");

if (ageValue < 18) {
    resultStop.classList.remove("hidden");
}
else if (ageValue <= 100) {
    resultGo.classList.remove("hidden");
}
else {
    resultMax.classList.remove("hidden");
}


/* operador ternario*///Solo funciona con 2 posibilidades
const nombre = "miguel"
//guardo el resultado en una variable "msj"
const msj = (nombre === 'miguel') ? "no te hace falta ir al barbero" : "haces milonario al barbero";

const msjProfe = document.querySelector(".js-msj-profe");
msjProfe.innerHTML = msj;

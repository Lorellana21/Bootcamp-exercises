"use strict";
//1: sobre qué elemento quiero escuchar el evento y lo selecciono del HTML:
const nameInput = document.querySelector(".js-name");

const lastnameInput = document.querySelector(".js-lastname");
const pa = document.querySelector(".js-greeting");

//3: Creo la función para crear lo que quiero que pase:
function handlerInput() {
  const inputValue = nameInput.value;//Coge el valor de un "input" y lo guarda en una variable
  console.log(inputValue);
  pa.innerHTML = "hola " + inputValue + '!';
  console.log(pa.innerHTML);
}

//2: escucho el evento y decido qué evento quiero escuchar (keyup o change):
//nameInput.addEventListener("change", handlerInput);
nameInput.addEventListener("keyup", handlerInput);

//"addEventListener" recibe 2 parámetros
//"keyup" o "change" son los nombres del evento
//"handlerInput" es una función que no lleva paréntesis pq es de tipo Callback, la ejecuta el navegador.
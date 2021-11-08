'use strict';

const buttonElement1 = document.querySelector (".js-button1");
const buttonElement2 = document.querySelector (".js-button2");

//Con una única función manejadora domino los dos botones:
function handleClass(event){
// Asignamos a una constante el elemento
 // sobre el que pusimos el `listener`
 // para trabajar cómodamente con él
    const clickedButton = event.currentTarget;
    clickedButton.classList.toggle("yellow");
}

//Varios elementos tienen el msimo handler:
buttonElement1.addEventListener("click", handleClass); 
buttonElement2.addEventListener("click", handleClass);




"use strict";
const formElemt = document.querySelector(".js-form");
const inputName = document.querySelector(".js-name");
const result = document.querySelector(".js-result");


const handlerForm = (event) => {
    /* Descripción:
        event.currentTarget <-- Elemento al que le he puesto el addEventListener
        event.target  <-- Elemento en el que realmente sucede el evento
    
        En este caso: 
        event.currentTarget  --> El formulario
        event.target         --> El <input> donde haya escrito
      */
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.target.value);
    result.innerHTML = event.target.value;//REcoger el value siempre dentro de la función pues es cuando me interesa usarlo.
}

//currentTarget, el elemento sobre el que escuchamos
formElemt.addEventListener("change", handlerForm);

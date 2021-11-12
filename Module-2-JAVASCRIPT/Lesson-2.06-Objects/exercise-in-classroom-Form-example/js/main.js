"use strict";

//Primer paso: Seleccionar el elemento del HTML
const form = document.querySelector(".js-form-user");
//Creo el objeto vacío aqui para que sea accesible desde cualquier parte
const formData = {};//Se irán aañdiendo las propiedades cada vez que el input cambie.

//con una sola función manejadora cojo el input que ha cambiado.
function handlerInput(e) {//El navegador es quien nos da la inofrmacion del evento que ha occurido a través del parámetro "event"
    //console.log(e); Este evento es un objeto en sí. También , cada elemento del HTML es un objeto.
    const inputName = e.target.name;//Me da el "name" del elemento que ha cambiado. Este "name" es la propiedad.
    const inputValue = e.target.value;//Este es el valor*
    console.log(inputName, inputValue);

    //Añado esos dos valores a mi objeto:
    //A "formData" le añado la propiedad (guardada en al constante "inputName"), 
    // y que el valor de esa propeidad sea lo que escribio el usuario
    //(guardado en la constante "inputValue").
    formData[inputName] = inputValue;
    console.log(formData);
}

//Quiero escuchar al formulario entero para no tener que hacer un addeventlistener para cada Input.
//El formulario es mi current Target
form.addEventListener("change", handlerInput)

//*Recordar que el objeto se compone de parejas de Propiedad : valor,
'use strict';

////Nos hemos dado cuenta de que cuando llamamos a getEl a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error.
//Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:

//Nota: podemos imprimir/loguear errores con console.error().

//Al recoger el elemento de HTML vamos a guardarlo en una constante.
function getEl(sel){
  const element = document.querySelector(sel);

//Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola
  if (element === null){
    console.error ("No existe ningún elemento con clase, id o tag llamado" + sel);
  } else if (element !== null) {
    return element;
  }
}

//Finalmente tras nuestro condicional retornaremos la constante con el elemento.

const htmlElement = getEl();
htmlElement.innerHTML = "hola";

  









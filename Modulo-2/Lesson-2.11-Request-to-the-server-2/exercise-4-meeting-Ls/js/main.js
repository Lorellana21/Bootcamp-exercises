`use strict`;

/*Prepara un input de texto para el nombre y un párrafo vacío
Cada vez que la usuaria escriba su nombre (keyUp) tenemos que pintar el valor en el párrafo y guardarlo en localStorage.
Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.

*/
const inputElement = document.querySelector(".js-input");
const pa = document.querySelector(".js-pa");

function paintHTML() {
  const inputIntroduced = inputElement.value;
  pa.innerHTML = inputIntroduced;
  localStorage.setItem("name", inputIntroduced);
}

inputElement.addEventListener("keyup", paintHTML);

const name = localStorage.getItem("name");

pa.innerHTML = name;

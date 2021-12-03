"use strict";

const blackboard = document.querySelector(".js-main");

function write() {
  const sentence = "He aprendido bien cómo funcionan los bucles";

  //ESCRIBIMOS EL MENSAJE 100 VECES
  for (let i = 1; i < 101; i++) {
    const phrase = document.createElement("p");
    const textPhrase = document.createTextNode(sentence);
    phrase.appendChild(textPhrase);
    blackboard.appendChild(phrase);

    //Creamos 100 select y lo añadimos a cada frase
    let createSelect = document.createElement("select");
    createSelect.id = i;
    blackboard.appendChild(createSelect);

    //Añadimos las opciones para cada Select
    let colors = ["blanco", "azul", "rojo", "verde", "amarillo", "rosa"];

    for (let j = 0; j < colors.length; j++) {
      let createOption = document.createElement("option");

      createOption.value = colors[j];
      createOption.text = colors[j];
      createOption.id = j;
      createSelect.appendChild(createOption);
    }

    //PONEMOS A LA ESCUCHA AL SELECT PARA QUE PUEDA CAMBIAR DE COLOR CUANDO CAMBIEMOS LA OPCION SELECCIONADA
    createSelect.addEventListener("change", changeColour);
  }
}
//FUNCION QUE CAMBIA DE COLOR LA FRASE EN FUNCION DE LA OPCION CLICKADA EN EL SELECT
function changeColour(e) {
  let selectedColour = e.target.value;
  let indexSelected = event.currentTarget.selectedIndex; //índice de la opción seleccionada en el select (0-5)
  console.log(indexSelected); //índice de la opción seleccionada en el select (0-5)
  let idSelect = event.currentTarget.id; //el id del select modificado

  //selecciono el párrafo que ocupa la posición idSelect
  const paragraph = document.querySelectorAll("p")[idSelect];

  //al párrafo seleccionado le añado el color clickado
  if (indexSelected === 0) paragraph.style.color = "white";
  else if (indexSelected === 1) paragraph.style.color = "blue";
  else if (indexSelected === 2) paragraph.style.color = "red";
  else if (indexSelected === 3) paragraph.style.color = "green";
  else if (indexSelected === 4) paragraph.style.color = "yellow";
  else paragraph.style.color = "pink";
}

write();

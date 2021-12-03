"use strict";

/*Ejercicio 6
1) Escribir 100 veces "He aprendido bien como funcionan los bucles".
- Crear el bucle  y en el bucle:
[]Crear elemento p
[]Darle como contenido el texto
[]Añadir el contenido al elemento y enviarlo al DOM*/

//Identifico mi elemento HTML

const mainSection = document.querySelector(".mainSection");

//creo una funcion para repetir la linea

function repeatLine() {
  //creo un array de tamaño 100 con el valor indicado en el ejercicio

  const paragraphArray = new Array(100).fill(
    "He aprendido bien como funcionan los bucles"
  );

  //hago un bucle  sobre los 100 y creo mi elemento y le asigno el valor del array.
  for (let i = 0; i < paragraphArray.length; i++) {
    const newLine = paragraphArray[i];
    const newParagraph = document.createElement("p");

    // agregamos un identificador a cada  párrafo para diferenciarlos
    const paragraphContent = document.createTextNode(`${newLine}`);
    newParagraph.id = `paragraph-${i}`;

    //sumo el contenido al elemento
    newParagraph.appendChild(paragraphContent);

    //añado todos los elementos al HTML: el párrafo y la funcion del select
    mainSection.appendChild(newParagraph);
    mainSection.appendChild(createSelect(i));
  }
  return mainSection;
}

repeatLine();

/* 2) Añadir un select con 6 options de colores al final de cada  linea
- Creo una funcion que cree el select + los options
- Meto en el html la funcion del select */

function createSelect(index) {
  //creo elemento select
  const selectColor = document.createElement("select");

  //le doy al elemento select un id que sea igual a su index
  selectColor.id = index;

  //creo array con los colores
  const colors = ["Blanco", "Azul", "Rojo", "Verde", "Amarillo", "Rosa"];

  //bucle al array de colores

  for (const color of colors) {
    //creo elemento option
    const optionEl = document.createElement("option");

    //indico texto del color usando el array
    const optionColor = document.createTextNode(`${color}`);

    //asigno al option el color
    optionEl.appendChild(optionColor);

    //asigno al select mi option
    selectColor.appendChild(optionEl);
    //le pido return del elemento para reutilizarlo en otras funciones
  }
  return selectColor;
}

/* 3) Vamos a darle color:
Al cambiar el color en el select, cambia el color del texto.
;*/

const selectColor = document.querySelectorAll("select");

function changeColor(ev) {
  //le indico que busque el id del párrafo para que se cambie solo la linea que deseamos y no todo el texto
  const idToSearch = `paragraph-${ev.target.id}`;
  const paragraph = document.querySelector(`#${idToSearch}`);

  //creo un objeto con todos los colores (podría/debería serun array para simplificar el condicional)
  const colours = {
    white: "white",
    blue: " #80b8e9",
    red: "#ed7777",
    green: "#98bc76",
    yellow: "#f5f9ad",
    pink: "#e9658f",
  };

  // creo un condicional para que se cambie el párrafo en función al index de selector utilizado

  if (ev.target.selectedIndex === 0) {
    paragraph.style.color = colours.white;
  }
  if (ev.target.selectedIndex === 1) {
    paragraph.style.color = colours.blue;
  }
  if (ev.target.selectedIndex === 2) {
    paragraph.style.color = colours.red;
  }
  if (ev.target.selectedIndex === 3) {
    paragraph.style.color = colours.green;
  }
  if (ev.target.selectedIndex === 4) {
    paragraph.style.color = colours.yellow;
  }
  if (ev.target.selectedIndex === 5) {
    paragraph.style.color = colours.pink;
  }
}

//Llamo a la función, al ser selectorAll tengo que hacer un forEach para que todos los select funcionen

selectColor.forEach((el) => {
  el.addEventListener("change", changeColor);
});

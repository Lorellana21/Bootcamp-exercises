`use strict`;

/*Crear un formulario con tres campos:
Nombre
Apellidos
Teléfono
En JavaScript tendremos un array de 3 objetos con esa estructura (es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono). 
La usuaria debe elegir uno de esos 3 con un select con el nombre. 
Al seleccionarlo se rellenará el formulario automáticamente.
*/

// listado de personas para llenar los OPTION  del select
const persons = [
  {
    id: "123a",
    nombre: "Julia",
    apellido: "ruiz",
    telefono: 12356,
  },
  {
    id: "123b",
    nombre: "lorena",
    apellido: "garcias",
    telefono: 123658,
  },
  {
    id: "123c",
    nombre: "lucia",
    apellido: "perez",
    telefono: 22558,
  },
];

const selectElement = document.querySelector(".js-select");
const inputName = document.querySelector(".js-name");
const inputLast = document.querySelector(".js-lastName");
const inputPhone = document.querySelector(".js-phone");

// funcion para llenar, crear los elementos OPTION del select
function paintOption() {
  for (const person of persons) {
    const optionEle = document.createElement("option");
    selectElement.appendChild(optionEle);
    const textElem = document.createTextNode(person.nombre);
    optionEle.appendChild(textElem);
    //optionEle.value = person.nombre;
    optionEle.setAttribute("value", person.nombre);
    optionEle.dataset.idPerson = person.id;
  }
}
paintOption();

//funcion manejadora del evento, al cambiar el option del select
function handlerSelect(ev) {
  const selectValue = ev.target.value;
  const dataset = ev;
  const selectDatasetId = ev.target[0].dataset.idPerson;
  //const selectValue = selectElement.value;
  console.log(selectValue);
  console.log(selectDatasetId);
  console.log(dataset);
  //inputName.setAttribute("value",selectValue);
  for (const person of persons) {
    if (selectValue === person.nombre) {
      inputName.value = selectValue;
      inputLast.value = person.apellido;
      inputPhone.value = person.telefono;
    }
  }
}
selectElement.addEventListener("change", handlerSelect);

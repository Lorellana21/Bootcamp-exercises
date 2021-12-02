'use strict';


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
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPhone = document.querySelector("#phone");

// funcion para llenar, crear los elementos OPTION del select:

  function paintOption() {
    for (const person of persons) {
      const optionEle = document.createElement("option");//Creo el elemento "option"
      selectElement.appendChild(optionEle);//Es hijo del "select"
      const textElem = document.createTextNode(person.nombre);//Añado ell texto
      optionEle.appendChild(textElem);//El texto es hijo de cada "option"
      //optionEle.value = person.nombre; Es lo mismo que la línea de abajo.
      optionEle.setAttribute("value", person.nombre);//Creo el atributo"value" con el nombre de cada objeto
      optionEle.dataset.idPerson = person.id;//Este atributo es solo para guardar información para el programador. Me lo invento, lo creo de la nada.
    }
  }
  paintOption();

  //funcion manejadora del evento, al cambiar el option del select
function handlerSelect(ev) {
    const selectValue = ev.target.value;//o la siguiente línea:
    //const selectValue = selectElement.value;
    const dataset = ev;
    const selectDatasetId = ev.target[0].dataset.idPerson;
    console.log(selectValue);
    console.log(selectDatasetId);
    console.log(dataset);
    //inputName.setAttribute("value",selectValue);
    for (const person of persons) {
      if (selectValue === person.nombre) {
        inputName.value = selectValue;
        inputSurname.value = person.apellido;
        inputPhone.value = person.telefono;
      }
    }
  }
selectElement.addEventListener("change", handlerSelect);
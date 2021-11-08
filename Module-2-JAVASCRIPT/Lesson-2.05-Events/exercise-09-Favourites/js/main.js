'use strict';

const listElement = document.querySelector (".teachers");
const isra = listElement.querySelector(".teacher--isra");
const carlos = listElement.querySelector(".teacher--tuerto");
const nasi = listElement.querySelector(".teacher--nasi");


function handleFavourite(event){
    //Para añadir la clase al seleccionado:
    const selectedTeacher = event.currentTarget;
    selectedTeacher.classList.toggle("teacher--selected");

    //Para modificar el texto "Añadir" o "quitar":
    if(selectedTeacher.querySelector(".favorite").innerHTML === "Añadir"){
        const addClass = selectedTeacher
      .querySelector(".favorite")
      .innerHTML.replace("Añadir", "Quitar");
       selectedTeacher.querySelector(".favorite").innerHTML = addClass;
    } else {
    const removeClass = selectedTeacher
    .querySelector(".favorite")
    .innerHTML.replace("Quitar", "Añadir");
  selectedTeacher.querySelector(".favorite").innerHTML = removeClass;
    }
}

isra.addEventListener("click", handleFavourite);
carlos.addEventListener("click", handleFavourite);
nasi.addEventListener("click", handleFavourite);
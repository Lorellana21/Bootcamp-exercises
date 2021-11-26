'use strict';

const formElement = document.querySelector ('.js-form');
const inputName = document.querySelector ('.js-input-name');
const inputSurname = document.querySelector ('.js-input-surname');
const pElement = document.querySelector ('.js-text');

function handleinput(event){
    let nameIntroduced = inputName.value;
    let surnameIntroduced = inputSurname.value;
    pElement.innerHTML = nameIntroduced + surnameIntroduced;
    //Creo mi objeto:
    const data = {
        name : nameIntroduced,
        surname : surnameIntroduced,
    }
    //Lo guardo
    localStorage.setItem('data', JSON.stringify(data));
}

//Lo recojo del LS
const savedData = JSON.parse(localStorage.getItem('data'));
    if(savedData !==null){ //Para pintarlo cuando se recargue la página
        inputName.value = savedData.name;
        inputSurname.value = savedData.surname; //En el input aparece el valor guardado
        pElement.innerHTML = `${savedData.name} ` + ` ${savedData.surname}`;//En el párrafo aparece el valor guardado
   } else { //Para limpiar el LS
    inputName.value = '';
    inputSurname.value = '';
    pElement.innerHTML= '';
   }

formElement.addEventListener("keyup", handleinput);








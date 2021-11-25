'use strict';


const inputElement = document.querySelector ('.js-input');
const pElement = document.querySelector ('.js-text');

function handleinput(event){
    const nameIntroduced = inputElement.value;
    pElement.innerHTML = nameIntroduced;
    localStorage.setItem('name', nameIntroduced);
}

inputElement.addEventListener("keyup", handleinput);

const savedName = localStorage.getItem('name');
if(savedName !== ""){
    inputElement.value = savedName;//En el input aparece el valor guardado
    pElement.innerHTML = savedName;//En el párrafo aparece el valor guardado
}

/*o también
const name = localStorage.getItem("name");
pElement.innerHTML = name;
*/





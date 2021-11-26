'use strict';

//ejercicio 2

const inputElement = document.querySelector ('.js-input');
const btnElement = document.querySelector ('.js-btn');
const listElement = document.querySelector ('.js-list');


function findCharacter(){
    const inputIntroduced = inputElement.value;

//comprobvamos que el valor intorducido coincide con lo que ya hay en LS
if (localStorage.getItem('characters')){
    console.log("No se realiza petición al servidor");
    //al ser un string tendremos que pasarlo a objeto!
    const savedData = JSON.parse(localStorage.getItem('characters'));
    paintCharacters(savedData);
    // Sino se puede coger, esto nos da falsy y pasaríamos a hacer la petición al servidor.

} else {
    console.log("Se realiza petición al servidor");
    fetch(`https://swapi.dev/api/people/?search=${inputIntroduced}`)
    
    .then(response => response.json())
    .then(data => {
        ////guardo los personajes obtenidos accediendo a results
        let characters = data.results;
        paintCharacters(characters);
         //Hay que guardarlo en el localStorage, y como es un objeto, hay que pasarlo a string
         localStorage.setItem(characters, JSON.stringify(characters));
    });
}
}

function paintCharacters(characters){
    let content = '';

        for(let i = 0; i < characters.length; i++){
            const name = characters[i].name;
            const gender = characters[i].gender;
            content += `<li>Character's name is ${name} and its gender is ${gender}</li>`;
        }
        //guardo los personajes coincidentes en la lista
        listElement.innerHTML = content;
}

btnElement.addEventListener("click", findCharacter);


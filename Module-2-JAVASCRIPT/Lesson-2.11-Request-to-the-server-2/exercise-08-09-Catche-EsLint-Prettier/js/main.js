'use strict';

//ejercicio 2
const inputElement = document.querySelector ('.js-input');
const btnElement = document.querySelector ('.js-btn');
const listElement = document.querySelector ('.js-list');


function findCharacter(event){
    const inputIntroduced = inputElement.value;
    fetch(`https://swapi.dev/api/people/?search=${inputIntroduced}`)
    
    .then(response => response.json())
    .then(data => {
        ////guardo los personajes obtenidos accediendo a results
        console.log(data.results);
        const characters = data.results;
        ////guardaré esos personajes en una lista
        let content = '';

        for(let i = 0; i < characters.length; i++){
            const name = characters[i].name;
            const gender = characters[i].gender;
            content += `<li>Character's name is ${name} and its gender is ${gender}</li>`;
        }
        //guardo los personajes coincidentes en la lista
        listElement.innerHTML = content;
    })

}
btnElement.addEventListener("click", findCharacter);


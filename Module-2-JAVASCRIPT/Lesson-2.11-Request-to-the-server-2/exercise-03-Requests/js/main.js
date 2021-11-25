'use strict';


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

/*
1- Método de la solicitud: get
2- Código de estado: 200
3- user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36
4- content-type: application/json
5- 
*/


'use strict';

const ENDPOINT = 'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json'

let users = [];
let favorites = [];
const list = document.querySelector (".js-list");

/* Do your magic! 🦄🦄🦄*/
//When loading the page we have to paint a list of princesses with the following information:

/*- Name
- Photo
- Comment of the princess*/

const getPrincess = () => {
    fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    
    for (const princess of data){
        list.innerHTML += `<li>${princess.name}</li>`
        list.innerHTML += `<li>${princess.comment}</li>`
        list.innerHTML += `<img src="${princess.picture}" alt="${princess.name}"></img>`
    }
  })

}


getPrincess();
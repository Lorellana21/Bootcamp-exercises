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
        list.innerHTML += `<li><h2>${princess.name}</h2><br><p>${princess.comment}</p> <br><img src="${princess.picture}" alt="${princess.name}"></li>`
    }
  })
}

function paintBackground(){
  console.log(event.currentTarget);
  const selectedPrincess = event.target;
  selectedPrincess.classList.add("lightBlue");
}


list.addEventListener("click", paintBackground);


getPrincess();
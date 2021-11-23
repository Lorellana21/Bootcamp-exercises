'use strict';

const listElement = document.querySelector('.js-list');
const btnElement = document.querySelector ('.js-btn');
const textElement = document.querySelector ('.js-result');
const img = document.querySelector("img");

const listBreeds = [];

function renderData(randomBreed, imageData){
  textElement.innerHTML = randomBreed;
  img.src = imageData.message;
  img.alt = "Un perro";
}

// Peticiones al servidor encadenadas
function getBreedsImage(){
  fetch ("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(data => {
      console.log('Breeds data response: ', data.message);
      // Listado de razas recibida del servidor la incluimos en el array exterior
      for (const breed in data.message) {
        listBreeds.push(breed);
        // console.log(listBreeds);
      }
  return fetch("https://api.rand.fun/number/integer?min=0&max=99")
    .then(response => response.json())
    .then(data => {
      // Numero aleatorio recibido del servidor lo guardo en una variable
      const randomNumber = data.result;
      // Elegir una raza de manera aleatoria
      // obtenida del listado de razas + nº aleatorio en su índice
      const randomBreed = listBreeds[randomNumber];
      console.log(randomBreed);
      // Combinación de ambas solicitudes
      return fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
      .then((imageResponse) => imageResponse.json())
      .then((imageData) => {
        console.log(imageData);
        renderData(randomBreed, imageData);
      });      
    });
});
}

btnElement.addEventListener("click", getBreedsImage);
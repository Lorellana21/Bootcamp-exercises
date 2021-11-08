'use strict';
//Lista de películas
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

//Selecciono elementos del html
const listElement = document.querySelector (".js-list");
const buttonElement = document.querySelector (".js-button");


//Primera función para pintar en el html al clicar el botón:
function paintMovies(event){
  const content = `<li>${inception}</li>
  <li>${theButterFlyEffect}</li>
  <li>${eternalSunshineOfTheSM}</li>
  <li>${blueVelvet}</li>
  <li>${split}</li>`;
listElement.innerHTML = content;
}

//Segunda función para que aparezcan los nombres de las películas en consola al clicar sobre una de ellas:
function handleMovies(event){
const movieSelected = event.currentTarget;
console.log(movieSelected.querySelector("li"));//solome coge el primer li
}

buttonElement.addEventListener("click", paintMovies);
listElement.addEventListener("click", handleMovies);


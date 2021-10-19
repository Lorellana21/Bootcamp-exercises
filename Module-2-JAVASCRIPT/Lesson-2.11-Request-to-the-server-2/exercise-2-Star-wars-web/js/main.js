`use strict`;

/*Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.
 */

function getList() {
  const inputElement = document.querySelector(".js-input");
  const inputIntroduced = inputElement.value;

  fetch(`https://swapi.dev/api/people/?search=${inputIntroduced}`)
    .then((response) => response.json())
    .then((data) => {
      const arrayResults = data.results;
      console.log(arrayResults);
      const dataList = document.querySelector(".js-list");
    });
}

const btnElement = document.querySelector(".js-btn");
btnElement.addEventListener("click", getList);

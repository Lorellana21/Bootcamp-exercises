`use strict`;

/*Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.
 */

//caja de texto

//botón

//valor del input

function getList() {
  const inputElement = document.querySelector(".js-input");
  const inputIntroduced = inputElement.value;

  fetch(`https://swapi.dev/api/people/${inputIntroduced}`)
    .then((response) => response.json())
    .then((data) => {
      const dataList = document.querySelector(".js-list");
      dataList.innerHTML = data.name;
      dataList.innerHTML = data.gender;
    });
}

const btnElement = document.querySelector(".js-btn");
btnElement.addEventListener("click", getList);

`use strict`;

/*Eexplorar la parte del API para acceder a la info sobre organizaciones.
La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. 
Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. 

Hay que ostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este:

Para ello vamos a hacer lo siguiente:
1. Preparar un input  con un botón para que la usuaria introduzca la organización.
2. Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
3. Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
4. En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).

*/

function getInfo() {
  const inputElement = document.querySelector(".js-input");
  const orgName = inputElement.value;
  fetch(`https://api.github.com/orgs/${orgName}`)
    .then((orgResponse) => orgResponse.json())
    .then((orgData) => {
      // Obtenemos url especifica de los repos de Adalab
      const repoUrl = orgData.repos_url;
      console.log(repoUrl);

  //hasta aqui esta bien pero aun asi no funciona

  fetch(`https://api.github.com/orgs/` + repos[0]);
    .then((repoResponse) => repoResponse.json())
    .then((repoData) => {
      const list = document.querySelector(".js-list");
      list.innerHTML = repoData.name;
    });
})

const btnElement = document.querySelector(".js-btn");
btnElement.addEventListener("click", getInfo);

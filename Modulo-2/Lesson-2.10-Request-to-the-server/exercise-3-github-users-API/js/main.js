`use strict`;

/*Vamos a seguir explorando el API de GitHub explorando la parte del API para acceder a la info sobre organizaciones. La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este:

Para ello vamos a hacer lo siguiente:
1. Preparar un input  con un botón para que la usuaria introduzca la organización.
2. Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
3. Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
4. En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).

*/

const btnElement = document.querySelector (".js-btn");

function getInfo(){
    const inputElement = document.querySelector (".js-input");
    const orgName = inputElement.value;
    fetch ("https://api.github.com/orgs/"+ {orgName})
    .then((response) => response.json())
    .then((repo) => {
        const repoUrl = repo.repos_url;
        return fetch ("https://api.github.com/orgs/" + {orgName} + "/repos")
    })
    .then(repoResponse => repoResponse.json())
    .then(repoData => {
        const list = document.querySelector (".js-list");
        list.innerHTML = repoData.name;
    })

}


btnElement.addEventListener ("click", getInfo);
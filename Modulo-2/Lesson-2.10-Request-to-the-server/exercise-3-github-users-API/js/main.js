`use strict`;

/*Vamos a explorar el API de usuarios de GitHub. 
La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. 

Crear una página en la que haya un input de texto y un botón de buscar. 
El usuario escribirá en el input un nombre de usuario de GitHub. 
Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página.
*/

function getInfo() {
  //Input donde la usuaria pone su nombre de usuario
  const username = document.querySelector(".js-input");
  //valor del input
  const usernameAcepted = username.value;

  fetch(`https://api.github.com/users/${usernameAcepted}`)
    .then((response) => response.json())
    .then((data) => {
      //li donde aparece su nombre
      const nameElement = document.querySelector(".js-name");
      nameElement.innerHTML = data.name;
      //li donde aparece su numero de repo
      const repoNumberElement = document.querySelector(".js-repoNumber");
      repoNumberElement.innerHTML = data.public_repos;
      //li donde aparece su avatar
      const avatarElement = document.querySelector("img");
      avatarElement.src = data.avatar_url;
    });
}

//Botón de buscar
const buttonElement = document.querySelector(".js-btn");
buttonElement.addEventListener("click", getInfo);

'use strict';

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
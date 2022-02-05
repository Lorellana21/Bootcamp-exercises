'use strict';

const ENDPOINT = './data/users.json';

let users = [];
let favorites = [];
const list = document.querySelector(".js-list");


const getPrincess = () => {
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {


      for (const princess of data) {
        list.innerHTML += `<li class="list"><h2 class="title" >${princess.name}</h2><br><p>${princess.comment}</p> <br><img class="img" src="${princess.picture}" alt="${princess.name}"></li>`
      }
    })
}

function paintBackground() {
  console.log(event.currentTarget);
  const selectedPrincess = event.target;
  selectedPrincess.classList.add("lightBlue");
}


list.addEventListener("click", paintBackground);


getPrincess();
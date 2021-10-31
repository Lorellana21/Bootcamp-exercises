'use strict';

const firstDogImage = "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = 'Dina';

const secondDogImage = "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = 'Luna'; 

const thirdDogImage = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = 'Lana';

const dogList = document.querySelector("body");
dogList.innerHTML = 
  `<ul>
  <li>${firstDogName} <br><img src=${firstDogImage}></li>
  <li>${secondDogName} <br><img src=${secondDogImage}></li>
  <li>${thirdDogName} <br><img src=${thirdDogImage}></li>
  </ul>`;

console.log(dogList);

//Other way of doing it:
// dogList.innerHTML +=
//   "<ul class='js-dog'> <li class='js-dog1'></li> <li class='js-dog2'></li> <li class='js-dog3'></li> </ul>";

// const Dog = document.querySelector(".js-dog");
// const firstDog = document.querySelector(".js-dog1");
// const secondDog = document.querySelector(".js-dog2");
// const thirdDog = document.querySelector(".js-dog3");

// firstDog.innerHTML = `<img src="${firstDogImage}">${firstDogName}</img>`;
// secondDog.innerHTML = `<img src="${secondDogImage}">${secondDogName}</img>`;
// thirdDog.innerHTML = `<img src="${thirdDogImage}">${thirdDogName}</img>`;

// console.log(Dog);





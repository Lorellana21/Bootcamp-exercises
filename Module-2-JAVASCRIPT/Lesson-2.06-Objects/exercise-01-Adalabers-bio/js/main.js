'use strict';


const textElement1 = document.querySelector(".js-text");
const textElement2 = document.querySelector(".js-text2");

//Objeto normal:
const adalaber1 = {
  name : "Susana",
  age : 34,
  job : "periodista",
}

textElement1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años, y soy ${adalaber1.job}`;

//Objeto vacío:
const adalaber2 = {}
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz"

textElement2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años, y soy ${adalaber2.job}`;
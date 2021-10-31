'use strict';

const title = document.querySelector (".title");

const name1 = document.querySelector (".name1"); //cojo el primer li

const name2 = document.querySelector (".name2"); //cojo el segundo li

title.innerHTML += name2.innerHTML; /*el cuerpo del título lo cambio 
por el cuerpo del li con clase "name2"*/


console.log(title);






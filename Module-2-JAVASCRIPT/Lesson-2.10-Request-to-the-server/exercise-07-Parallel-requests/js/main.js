"use strict";

//función createPromise que crea las promesas de las peticiones al servidor con fetch y parsea a JSON en el then().
const createPromise = () =>
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) =>  response.json()
  );

function getBreedImages() {
  const promises = [ //array de promesas ejecutando 2 veces la función anterior
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise()
  ];
  //ejecutamos Promise.all pasándole como argumento el array de promesas, cuando todas las peticiones al servidor hayan terminado, se ejecutará la función del then() a la que le llegan todos los resultados mediante el parámetro responses.
  //el método Promise.all toma como parámetro un array de promesas y devuelve otra promesa que se resuelve cuando todas las del array se han resuelto
  Promise.all(promises) //sobre el resultado podremos hacer un then() que recibe como parámetro un array con todos los resultados de las promesas anteriores, es decir, donde tendremos todos los JSON de la respuesta del servidor
  .then((responses) => {
    for (let i = 0; i < responses.length; i++) { //recorremos el array que se encuentra en responses para ir pintando las imágenes en los img del HTML.
      const img = document.querySelector(".dog" + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreedImages);

'use strict';

const img = document.querySelector ('.js-img');

//Imágenes normales

// fetch(' https://api.thecatapi.com/v1/images/search', {
//   headers: {
//     "x-api-key": "f20f4fa4-309c-4207-89ad-1d67ead65b14",
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     const image = data[0].url;
//     img.src = image;
//   });

//Para Gifs
fetch('https://api.thecatapi.com/images/search?mime_types=gif', {
   headers: {
     "x-api-key": "f20f4fa4-309c-4207-89ad-1d67ead65b14",
   }
 })
   .then(response => response.json())
   .then(data => {
       console.log(data);
   });
  

  





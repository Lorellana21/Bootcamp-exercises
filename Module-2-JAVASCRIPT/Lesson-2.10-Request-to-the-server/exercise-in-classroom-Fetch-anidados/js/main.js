"use strict";
// pintar  el listado de nombre de todas las razas
// pintar una imagen de cada raza de perro

const breedList = document.querySelector(".js-breedList");
const listBreed = [];//He creado este array vacio para guardar todas las razas con el "push"
//pido la lista de todas las razas
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) =>{
    console.log(data);
    //La lista de los nombre de la raza viene en forma de objeto en data.message
    //recorro con FOR-IN al encontrarse dentro de un objeto y cada nombre de la raza (los otros "for" no me dejan hacerlo)
    //es una propiedad
    for (const breed in data.message) {
      /*breedList.innerHTML += `<li>${breed}</li>`;*/
      //listBreed.push(breed); En caso que se quiera añadir los resultados a un array lo hacemos aqui
      //console.log(listBreed);


      //defino la url para solicitar la imagen aleatoria asociada a cada raza
      let url = `https://dog.ceo/api/breed/${breed}/images/random`;
      //console.log(url);
      // hacemos una nueva peticion asociada a la raza correspondiente
      //debo hacer otro FETCH porque la imagen se encuentra en otra url de la api
      fetch(url)
       .then((result) => result.json())
       .then((dataImage) =>{
         //esta es la direccion donde se encuentra la imagen del perro
         console.log(dataImage.message);
         //por cada raza  se crea un LI en el HTML
         breedList.innerHTML += `<li> ${breed} 
         <img width ="50px" height ="50px" src="${dataImage.message}"/></li>`
       })
    }
  })
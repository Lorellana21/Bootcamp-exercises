'use strict';

const div = document.querySelector (".div"); //Cojo el div

const title = "<h1>Lorem ipsum</h1>";//Meto el h1 en la constante "title"

const image = `<img src="http://via.placeholder.com/350x150" />`;//Meto la imagen en la constante "image"

const text = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>"; //Meto el párrafo en la constante "text"

div.innerHTML = title + image + text; //Le digo al cuerpo de "div" que tiene que tener dentro todo eso.


// Tb se puede hacer así:

// const div = document.querySelector(".div");

// div.innerHTML =
//   '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt="imagen"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';





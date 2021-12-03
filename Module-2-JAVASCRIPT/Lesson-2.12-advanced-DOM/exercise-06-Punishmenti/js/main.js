'use strict';



function paintPhrase(){
  let phrases = [];
  for (let i = 1; i < 101; i++){
const mainElememt = document.querySelector ('.js-main');
const phrase = document.createElement ("p");
const textPhrase = document.createTextNode (`${[i]} He aprendido bien cómo funcionan los bucles`);
phrase.appendChild (textPhrase);
mainElememt.appendChild (phrase);
  }
};

paintPhrase();






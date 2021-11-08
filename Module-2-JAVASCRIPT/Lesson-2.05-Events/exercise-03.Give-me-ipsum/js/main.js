'use strict';


const pElement = document.querySelector (".js-text");


function handlerText(){
    pElement.innerHTML += "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquid fuga culpa voluptatum, praesentium sunt omnis! Magnam sed aliquid dolorum placeat. Porro, saepe! Ipsa impedit rem illum perspiciatis aperiam nesciunt.";
}


pElement.addEventListener("mouseover", handlerText);

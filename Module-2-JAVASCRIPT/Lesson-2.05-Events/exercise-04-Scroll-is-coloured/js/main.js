'use strict';

const container = document.querySelector (".js-container");
const body = document.querySelector (".js-body");

function handlerScroll(){
    let scrollMove = window.scrollY;
    if(scrollMove >= 250){
        container.classList.remove("red");
        container.classList.add("aqua");
    }else if (scrollMove < 250){
        container.classList.remove("aqua");
        container.classList.add("red");
    }
}


window.addEventListener ("scroll", handlerScroll);

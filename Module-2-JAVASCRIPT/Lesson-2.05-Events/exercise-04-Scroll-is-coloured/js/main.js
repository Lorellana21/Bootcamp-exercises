'use strict';

// Tenemos el HTML, el head y el body, por encima está el "document", 
// que engloba desde la esquina superior izquierda hasta la esquina 
// inferior derecha, pero solo el cuadrado principal; y por encima está 
// el "window", que es toda la ventana edl navegador, includia la pestaña y 
// la barra de dirección de la página.


const container = document.querySelector (".js-container");
const bodyElement = document.querySelector (".js-body");

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



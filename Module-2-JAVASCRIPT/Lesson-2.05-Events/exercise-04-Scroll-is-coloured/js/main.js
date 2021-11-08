'use strict';
// Tenemos el HTML, el head y el body, por encima está el "document", 
// que engloba desde la esquina superior izquierda hasta la esquina 
// inferior derecha, pero solo el cuadrado principal; y por encima está 
// el "window", que es toda la ventana edl navegador, includia la pestaña y 
// la barra de dirección de la página.


//First opción:
// const container = document.querySelector (".js-container");
// const bodyElement = document.querySelector (".js-body");

// function handlerScroll(){
//     let scrollMove = window.scrollY;
//     if(scrollMove >= 250){
//         container.classList.remove("red");
//         container.classList.add("aqua");
//     }else if (scrollMove < 250){
//         container.classList.remove("aqua");
//         container.classList.add("red");
//     }
// }
// window.addEventListener ("scroll", handlerScroll);



//Second option:

const bodyElement = document.querySelector (".js-body")

function handleBodyScroll(){
    console.log("scrolleando...", window.scrollY);
    const currentScroll = window.scrollY;
    bodyElement.classList.remove("red", "aqua");//Hay que borrar la clase anterior puesto que no pueden convivir las dos clases juntas. 
    //Con este remove en todo momento le quito las dos, y luego le voy a añadiendo la que le toque.
    if(currentScroll > 250){
        bodyElement.classList.add("red");
    } else {
        bodyElement.classList.add("aqua");
    }
}
window.addEventListener("scroll", handleBodyScroll);

//No le pongo "toggle" porque no quiero que vaya cambiando todo el rato, solo cuando llegue a 250px.

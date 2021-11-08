'use strict';

const body = document.querySelector (".js-body");

function handlerKeypress (event){
    var codigo = event.which || event.keyCode; //Aparece el codigo de la tecla
    console.log("Presionada: " + codigo);

    if(codigo === 114){
        body.classList.add("red");
        body.classList.remove("purple");
        
    }else if(codigo === 109){
        body.classList.add("purple");
        body.classList.remove("red");
    }
}

window.addEventListener ("keypress", handlerKeypress)


//Other way of doing it:
// function onkeyDown(push) {
//     let key = push.key;
//     if (key === "r") {
//       body.classList.add("red");
//       body.classList.remove("purple");
//     } else if (key === "m") {
//       body.classList.add("purple");
//       body.classList.remove("red");
//     }
//   }
  
//   document.addEventListener("keydown", onkeyDown);


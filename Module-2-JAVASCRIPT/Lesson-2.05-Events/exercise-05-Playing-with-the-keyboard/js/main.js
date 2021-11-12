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




// Other way of doing it:
// const bodyElement = document.querySelector('.body');

// function handleBodyBackground(ev) {
//   const pressedKey = ev.key.toLowerCase();
//   bodyElement.classList.remove('red', 'purple');
//   if (pressedKey === 'r') {
//     bodyElement.classList.add('red');
//   } else {
//     bodyElement.classList.add('purple');
//   }
// }

// bodyElement.addEventListener('keyup', handleBodyBackground);


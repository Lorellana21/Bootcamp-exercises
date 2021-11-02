'use strict';


const div = document.querySelector (".js-div");
const title = document.querySelector (".js-title");
const text = document.querySelector (".js-text");

//Si contiene la clase sucess:
if(div.classList.contains('sucess')){
     title.innerHTML = "CORRECTO";
     text.innerHTML = "Los datos son correctos";
} else if (div.classList.contains("error")){ //Si contiene la clase error
     title.innerHTML = "ERROR";
     text.innerHTML = "Ha surgido un error";
}else if (div.classList.contains("warning")){//Si contiene la clase warning
     title.innerHTML = "AVISO";
     text.innerHTML = "Tenga cuidado";
}



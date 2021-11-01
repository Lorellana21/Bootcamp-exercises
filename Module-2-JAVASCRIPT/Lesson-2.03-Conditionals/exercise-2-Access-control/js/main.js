'use strict';

const registeredUser = "Sandra";

if (registeredUser === "Lorena" || registeredUser === "María"){
    console.log(`Bienvenida, ${registeredUser}`); 
} else {
    console.log("Lo siento pero el usuario que has introducido no está registrado");
}

// Other way of doing it 
// Pintándolo en el HTML

// let partner = "Sandra";

// const body = document.querySelector("body");

// if (
//   partner === "Lorena" ||
//   partner === "María" ||
//   partner === "Sandra") {
//   body.innerHTML = "<h1> Bienvenida " + partner + "</h1>";

// } else {
//   body.innerHTML =
//     "<h1> Lo siento pero el usuario que has introducido no está registrado <h1>";
// }









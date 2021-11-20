'use strict';

let triangle = '▲';
let star = "★";
let trunk = "|";


function paintTree(lines){
  console.log(star);

  for (let i = 0; i < lines; i++){
    console.log(triangle.repeat(i+1));/*El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.*/
  }
  console.log(trunk);
}
paintTree(5);





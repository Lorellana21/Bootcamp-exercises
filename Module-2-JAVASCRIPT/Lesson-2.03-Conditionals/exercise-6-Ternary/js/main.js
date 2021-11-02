'use strict';


 // let avocados;
//  const avocadoPrice = 1.5;
//  const money = 33;

// if (money >= avocadoPrice) {
// avocados = money / avocadoPrice;
// } else {
// avocados = 0;
// }


//Con el ternario y declarando constante al mismo tiempo que el ternario:
// const avocadoPrice = 1.5;
// const money = 33;
// var avocados = money >= avocadoPrice ? avocados = money / avocadoPrice : avocados = 0;



//Another way of doing it. Primero declaro constantes y luego el ternario:
let avocados;
const avocadoPrice = 1.5;
const money = 33;

money >= avocadoPrice ? avocados = money / avocadoPrice : avocados = 0;

console.log(avocados);


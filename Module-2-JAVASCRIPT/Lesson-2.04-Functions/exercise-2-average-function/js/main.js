'use strict';

//Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

function getAverage (a, b, c, d){
     const result = (a + b+ c + d) / 4;
     return result;
}
  
//const averageResult = getAverage(5, 6, 7, 8);

//const averageResult = getAverage(20, 20, 20, 25);

const averageResult = getAverage(10, 7, 9, 8);
console.log(averageResult);








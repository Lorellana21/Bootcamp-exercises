'use strict';

//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
//Ejecutala e imprime el resultado para comprobar que funciona.

//Al ser divididos entre 2, todos los números pares darán como resto 0.

let number = 20;

function getEvenOdd(number){
  const module = number % 2;
  if(module === 0){
      return "par";
  }else {
    return "impar";
  }
}

const result = getEvenOdd(number);
//console.log("El número " + number + " es " + result);
console.log(result);
  









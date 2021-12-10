"use strict";

// INDEXOF

const numbers = [14, 12, 21, 64, 23, 12];

//Me dice la posición del elemento "64" en mi array
const indice = numbers.indexOf(64);
console.log(indice);//Devuelve "3"

//Si busco un elemento que no está dentro del array:
const indice2 = numbers.indexOf(100);
console.log(indice2);//Devuelve -1, un elemento que no tiene ninguna posición

//No funciona bien con arrays de objetos: el Array guardado en data.js
const indice3 = students.indexOf(21);
console.log(indice3);

//Lo mismo pero con bucle
for(let i =0; i < numbers.length; i++){
  if(numbers[i] === 64){
    console.log("posicion usando for: " +i);
  }
}


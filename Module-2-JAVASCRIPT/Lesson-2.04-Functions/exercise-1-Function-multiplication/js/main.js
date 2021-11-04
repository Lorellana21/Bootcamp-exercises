'use strict';

function multiplication (a, b){
    const result = a * b;
    return result;
  }
//Creo una variable en base al resultado:
const multiplicationResult = multiplication (8, 5);

console.log(multiplicationResult);


//Other way of doing it:
function mult(a, b) {
     return a * b;
   }

console.log(mult(2, 56));

const amount1 = mult(2, 56);
console.log(amount1);

const amount2 = mult(25, 56);
console.log(amount2);

const amount3 = mult(41, 256);
console.log(amount3);
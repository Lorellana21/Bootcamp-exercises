'use strict';

let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
   return secretLetter;
}

console.log(secretLetter); 
console.log(mySecretLetter()); 



/*si inviertes el orden de los console.log el 
console.log(secretLetter) devuelve 'y' porque cuando 
se encuentra primero, lee primero la variable y luego
actua la función.*/





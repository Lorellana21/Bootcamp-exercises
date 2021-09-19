'use strict';



// modificamos una variable de ámbito global
let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

//console.log(mySecretLetter()); // devuelve "x"
//console.log(secretLetter); // devuelve "x"
  
//prueba a cambiar el orden del los console.log. ¿Qué está pasando? ¿Por qué no se imprime en la consola 2 veces "x"?

console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"

//que ejecuta el primer console.log antes de la función.






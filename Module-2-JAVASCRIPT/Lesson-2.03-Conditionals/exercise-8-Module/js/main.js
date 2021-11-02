'use strict';

//Planteamiento:
// año = 3;
// divido 3 entre 4
// resto = 3;
// lo que me queda para que sea bisiesto = 4 - 3 = 1;
// año + lo que me queda = 3 + 1 = 4;



 //El año es (el que sea)
// Si lo divido entre 4 el resto es 0?
// Si es asi ese año es bisiesto


const actualYear = 2021;
//Hallo el "resto" de la división y lo guardo en una constante:
const module = actualYear % 4;
//Años que quedan para que llegue el bisiesto:
const remainingYear = 4 - module;
const nextLeapYear = actualYear + remainingYear;

console.log(nextLeapYear);
'use strict';


const actualYear = 2021;
//Para obtener el resto de la división:
const module = actualYear % 4;
//Años que quedan para que llegue el bisiesto:
const remainingYear = 4 - module;
const nextLeapYear = actualYear + remainingYear;

console.log(nextLeapYear);
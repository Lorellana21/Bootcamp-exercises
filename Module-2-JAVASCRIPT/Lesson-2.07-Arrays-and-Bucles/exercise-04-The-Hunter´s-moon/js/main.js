'use strict';

//First option:
  // for (let year = 2017; year < 2062; year = year + 3){
  //   console.log(`La próxima luna será en ${year} `);
  // }


  //Second option:
  // for (let moon = 2017; moon < 2030; moon = moon +3) {
  //   console.log('Me muestro el 5 de octubre del año ' + moon);
  // }

  //Third option:
for (let moon = 0; moon < 45; moon = moon + 3) {//45 es el resultado de multiplicar 3 años por 15 vueltas
    console.log(
      `La próxima Luna del Cazador será el 5 de octubre de ${2017 + moon}`
    );
  }
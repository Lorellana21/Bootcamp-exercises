`use strict`;

//Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.


for (let moon = 2017; moon < 2030; moon = moon +3) {
    console.log('Me muestro el 5 de octubre del año ' + moon);
  }


for (let moon = 0; moon < 45; moon = moon + 3) {
    console.log(
      `La próxima Luna del Cazador será el 5 de octubre de ${2017 + moon}`
    );
  }
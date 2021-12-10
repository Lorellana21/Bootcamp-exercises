'use strict';

const times = [56, 9, 45, 28, 35];

// Calculamos la suma de los elementos del array
const timesSum = times.reduce((acc, time) => acc + time);
console.log(timesSum);
// Calcular la media de los elementos del array principal
const timesAverage = timesSum / times.length;
console.log(timesAverage);

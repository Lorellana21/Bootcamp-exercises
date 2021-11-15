'use strict';

const numbers = [0, 1, 2, 3, 4];
let sum = 0;

//Recorrer el array, calcular la suma de los numeros y la media:
// for(let i = 0; i < numbers.length; i++){
//   console.log(`ingresa el ${i} numero`);
//   sum += numbers[i];
//   console.log(`la suma es ${sum}`)
//   const average = sum / 5;
//   console.log(`la media es ${average}`);
// }

//Añadir un nuevo numero al array:
numbers[5] = 5;

// for(let i = 0; i < numbers.length; i++){
//   console.log(`ingresa el ${i} numero`);
//   sum += numbers[i];
//   console.log(`la suma es ${sum}`)
//   const average = sum / 6;
//   console.log(`la media es ${average}`);
// }

const secondArray = [3, 3, 3, 3, 3, 3, 3, 3, 3]

//Crear funcion que calcule lo mismo de antes pero pasandole distintos arrays:
function average(){
  for(let i = 0; i < secondArray.length; i++)
sum += secondArray[i];
const result = sum / secondArray.length;
console.log(result);
}

average(secondArray);




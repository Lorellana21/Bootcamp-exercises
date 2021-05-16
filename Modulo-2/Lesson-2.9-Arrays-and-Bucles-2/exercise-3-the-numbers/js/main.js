`use strict`;

//Crear una función bestLostNomber que nos devuelve algunos números del array de los números de la serie Lost que tenemos abajo. La función debe seguir estos pasos:

//1. Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para, al encontrar un número par, meterlo en el nuevo array.



// Array de numeros dado
const lostNumbers = [4, 8, 15, 16, 23, 31, 42];

// Nuevo array que extrae elementos pares e impares
const lostNumbersEven = [];
const lostNumbersOdd = [];


function bestLostNumber(){
    for (let i = 0; i < lostNumbers.length; i++)
        if (lostNumbers[i] % 2 === 0){
            //par
            lostNumbersEven.push(lostNumbers[i]);
        } else{
            //impar
            lostNumbersOdd.push(lostNumbers[i]);
        }
    console.log(lostNumbersEven);
    console.log(lostNumbersOdd);

}
bestLostNumber();

////2. Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.

const lostNumbersMultiple = [];
function multipleNumber(){
    for (let i = 0; i < lostNumbers.length; i++)
        if(lostNumbers[i] % 3 === 0){
            //multiplos de 3
            lostNumbersMultiple.push(lostNumbers[i]);
        }
        console.log(lostNumbersMultiple);
}
multipleNumber();

///3. Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.

const result = lostNumbers.concat(lostNumbersMultiple);
console.log(result);
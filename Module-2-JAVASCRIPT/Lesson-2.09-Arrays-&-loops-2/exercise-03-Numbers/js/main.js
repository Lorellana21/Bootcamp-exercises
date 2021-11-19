'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];


function bestLostNumber(){
  
  for(let i = 0; i < lostNumbers.length; i++){
    if(lostNumbers[i] % 2 === 0){
      evenNumbers.push(lostNumbers[i]);
    }
  }
console.log(evenNumbers);
}
bestLostNumber();


const multipleThreeNumbers = [];

function multipleNumber(){
  for(let i = 0; i < lostNumbers.length; i++){
    if (lostNumbers[i] % 3 === 0){
      multipleThreeNumbers.push(lostNumbers[i]);
  }
}
console.log(multipleThreeNumbers);
}
multipleNumber();

const lostNumbersConcat = evenNumbers.concat(multipleThreeNumbers);
console.log(lostNumbersConcat);
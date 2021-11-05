'use strict';

//1
const getEven = (number) => {
  if(number % 2 === 0){
    console.log("true");
    } else{
      console.log("false");
    }
}
getEven(20);

//2
const getIva = (price) => {
  const IVA = price * 0.21;
  const total = price + IVA;
  return total;
}
const resultIva = getIva(10);
console.log(resultIva);


//3
const multiplication = (a, b) => {
  const result = a * b;
  return result;
}
const multiplicationResult = multiplication (8, 5);
console.log(multiplicationResult);









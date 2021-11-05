'use strict';


const getEven = (number) => {
  if(number % 2 === 0){
    console.log("true");
    } else{
      console.log("false");
    }
}
getEven(20);

const getIva = (price) => {
  const IVA = price * 0.21;
  const total = price + IVA;
  return total;
}

const resultIva = getIva(10);
console.log(resultIva);









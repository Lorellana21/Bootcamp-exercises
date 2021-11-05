'use strict';

function getEl(sel){
  return document.querySelector(sel);
}

const pElement = getEl(".js-number");
console.log(pElement);
const number = parseInt(pElement.innerHTML);
console.log(number);



function getEven(number){
  if(number % 2 === 0){
    console.log("Este número es par");
    } else{
      console.log("Este número es impar");
    }
}
getEven(number);









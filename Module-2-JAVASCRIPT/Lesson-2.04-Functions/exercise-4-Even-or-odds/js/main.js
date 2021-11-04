'use strict';

function getEven(number){
  if(number % 2 === 0){
    console.log("true");
    } else{
      console.log("false");
    }
}
getEven(5);


//Other way of doing it:
let number = 20;

function getEven(number){
  const module = number % 2;
  if(module === 0){
      return "par";
  }else {
    return "impar";
  }
}

const result = getEven(number);
//console.log("El número " + number + " es " + result);
console.log(result);
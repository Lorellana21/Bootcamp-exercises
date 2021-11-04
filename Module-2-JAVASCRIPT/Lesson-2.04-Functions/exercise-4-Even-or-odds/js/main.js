'use strict';

function getEvenOdds(number){
  if(number % 2 === 0){
    console.log("true");
    } else{
      console.log("false");
    }
}
getEvenOdds(5);


//Other way of doing it:
let number = 20;

function getEvenOdd(number){
  const module = number % 2;
  if(module === 0){
      return "par";
  }else {
    return "impar";
  }
}

const result = getEvenOdd(number);
//console.log("El número " + number + " es " + result);
console.log(result);
"use strict";

const basket = {
  maxApples : 24,
  minApples : 4,
  currentApples : 10,
  initApples : 5,
  }

basket.addApple = function (){
  return (this.currentApples = this.currentApples + 1);
}
console.log(basket.addApples());


basket.removeApple = function(){
  return (this.currentApples = this.currentApples - 1);
}
console.log(basket.removeApple());


basket.setApples = function(){
  return (this.currentApples = this.initApples);
}
console.log(basket.setApples());
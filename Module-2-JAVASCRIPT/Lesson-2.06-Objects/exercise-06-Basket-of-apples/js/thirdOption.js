"use strict";

const basket = {
      maxNumer: 10,
      minNumber: 5,
      currentNumber: 7,
      initialNumber: 6,
      add: function () {
        this.currentNumber++;
      },
      remove: function () {
        this.currentNumber--;
      },
      reset: function () {
        this.currentNumber = this.initialNumber;
      }
    };
    
    console.log(basket.currentNumber);
    basket.add();
    console.log(basket.currentNumber);
    basket.add();
    console.log(basket.currentNumber);
    basket.add();
    console.log(basket.currentNumber);
    basket.add();
    console.log(basket.currentNumber);
    basket.remove();
    console.log(basket.currentNumber);
    basket.reset();
    console.log(basket.currentNumber);
"use strict";

const plus = document.querySelector(".buttonPlus");
const minus = document.querySelector(".buttonMinus");
const reset = document.querySelector(".buttonReset");
const totalApples = document.querySelector(".totalApples");


const basket = {};
basket.max = 10;
basket.min = 0;
basket.actual = 0;
basket.initial = 0;

basket.addApple = function () {
  if (basket.actual < basket.max) {
    basket.actual += 1;
  }
  totalApples.innerHTML = basket.actual;
};

basket.restApple = function () {
  if (basket.actual > basket.min) {
    basket.actual -= 1;
  }
  totalApples.innerHTML = basket.actual;
};

basket.resetApple = function (reset) {
  reset = basket.initial;

  totalApples.innerHTML = reset;
};

plus.addEventListener("click", basket.addApple);
minus.addEventListener("click", basket.restApple);
reset.addEventListener("click", basket.resetApple);

'use strict';

const btnElement = document.querySelector('.js-btn');
// debugger;

const counterElement = document.querySelector('.js-counter');

let counter = 0;

function increase() {
  counter = counter + 1;
  console.log('counter', counter);
}

function handleClick() {
  increase();
  counterElement.innerHTML = counter;
}

btnElement.addEventListener('click', handleClick);

'use strict';

const time = document.querySelector('.js-time')
const stopButton = document.querySelector ('.js-stop');
const continueButton = document.querySelector ('.js-continue');

let counter = 0; 
let temp;
let timerOn = 0;

const timedCount = () => {
  time.innerHTML = counter;
  counter++;
  temp = setTimeout(timedCount, 1000);
  }

  function startCount(){
    if(!timerOn) {
      timerOn = 1;
      timedCount();
    }
  }

  function stopCount() {
    clearTimeout(temp);
    timerOn = 0;
  }

stopButton.addEventListener("click", stopCount);
continueButton.addEventListener("click", startCount);

timedCount();

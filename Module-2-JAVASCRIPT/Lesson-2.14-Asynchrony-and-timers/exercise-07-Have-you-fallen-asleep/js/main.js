"use strict";

const stopButton = document.querySelector(".js-stop");
const msg = document.querySelector(".js-text");
const time = document.querySelector(".js-time");

let counter = 0;

const timedCount = () => {
  counter++;
  time.innerHTML = counter;
  showMessage();
};

const showMessage = () => {
  if (counter < 11) {
    msg.innerHTML = " ";
  } else {
    msg.innerHTML = "¿Te has dormido?";
  }
};

function resetCounter() {
  counter = 0;
  timedCount();
  showMessage();
}

setInterval(timedCount, 1000);

stopButton.addEventListener("click", resetCounter);

//Other option
/*const msg = document.querySelector('.js-text');
const restart = document.querySelector('.js-stop')
  

setTimeout(() => {
    msg.innerHTML = '¿Te has dormido?';
}
, 10000);


function restartCounter(){
    msg.innerHTML = '';
  setTimeout(() => {
    msg.innerHTML = '¿te has dormido?';
  }
  , 10000);
}

restart.addEventListener('click',restartCounter);*/

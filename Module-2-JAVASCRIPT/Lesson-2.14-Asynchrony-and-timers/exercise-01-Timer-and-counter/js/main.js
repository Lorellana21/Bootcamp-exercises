'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter+=2;//se incrementa de 2 en 2
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);//cada 2 segundos se incrementa
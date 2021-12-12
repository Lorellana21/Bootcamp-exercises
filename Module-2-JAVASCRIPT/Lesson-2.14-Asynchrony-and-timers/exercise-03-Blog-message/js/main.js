'use strict';

let counter = 0; 

const incrementAndShowCounter = () => {
  counter++;
  const message = document.querySelector('.message');
  if(counter > 0 && counter < 60){
  message.innerHTML = `escrito hace ${counter} segundos`;
  } else {
  message.innerHTML = `escrito hace 1 minuto`;
  }
};

setInterval(incrementAndShowCounter, 1000);
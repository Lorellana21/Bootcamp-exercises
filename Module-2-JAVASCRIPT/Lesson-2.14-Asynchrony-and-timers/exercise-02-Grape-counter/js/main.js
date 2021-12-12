'use strict';

let counter = 12; //Ponemos el contador en 12

const incrementAndShowCounter = () => {
  if(counter < 13 && counter > 0){//La segunda condicion es para que no siga contando -1, -2, etc.
  counter--;//para que reste en vez de sumar
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  }
};

setInterval(incrementAndShowCounter, 1000);
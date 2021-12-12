'use strict';

let counter = 12; 
let temp;

const incrementAndShowCounter = () => {
  counter--;
  if(counter < 13 && counter > 0){//La segunda condicion es para que no siga contando -1, -2, etc.
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 6) {
    clearInterval(temp);
  }
  }
};

temp = setInterval(incrementAndShowCounter, 1000);



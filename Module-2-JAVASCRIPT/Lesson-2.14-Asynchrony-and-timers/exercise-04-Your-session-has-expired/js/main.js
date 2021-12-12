'use strict';

const removeMsg = () => {
  const msg = document.querySelector('.text');
  msg.innerHTML = 'su sesión ha expirado';
};

setTimeout(removeMsg, 15000);


//Other option:
// let counter = 0; 
// const time = document.querySelector('.time');
// const message = document.querySelector('.js-message');

// const incrementAndShowCounter = () => {
//   counter++;
//   time.innerHTML = counter;
  
//   if(counter < 16){
//     message;
// } else {
//   message.classList.remove("hidden");
//   }
// };

// setInterval(incrementAndShowCounter, 1000);



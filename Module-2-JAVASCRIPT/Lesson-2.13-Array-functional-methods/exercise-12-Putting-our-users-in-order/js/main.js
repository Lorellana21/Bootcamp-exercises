'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

// Ordenamos nuestro array por orden alfabético de nombres
users.sort((a, b) => {
  if(a.name < b.name){
    return -1;
  } else if (a.name > b.name){
    return 1;
  } else{
    return 0;
  }
});

console.log(users);

// Ordenamos nuestro array por orden de pin de menor a mayor
users.sort((a, b) => a.pin - b.pin);
console.log(users);

//Other option
const newPin = users.sort(function (a, b) {
  return a.pin - b.pin;
});
console.log(newPin);







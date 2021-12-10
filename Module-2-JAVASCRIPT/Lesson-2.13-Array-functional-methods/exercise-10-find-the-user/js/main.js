`use strict`;

/*a) Incidencia asociada al PIN 5232: encontrar el usuario que corresponde a ese PIN. Usa el método find.*/

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

//const incidence = users.find((user) => user.pin === 5232);

/*b) Usa el método findIndex para encontrar su posición y bórralo usando splice.*/

const incidence = users.findIndex((user) => user.pin === 5232);
const usersNew = users.splice(3, 1);
//console.log(usersNew); //solo me aparece Rocio

users.splice(
  users.findIndex((user) => user.pin === 5232),
  1
);

console.log(users);

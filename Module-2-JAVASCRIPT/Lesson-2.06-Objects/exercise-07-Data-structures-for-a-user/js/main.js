'use strict';

const user = {}
const job = "developer"

// Usando la notación con punto o la notación con corchetes
// Añadiremos propiedades
user.firstname = "Lorena";
user.lastname = "Orellana";
user.age = 39;
user.job = job;

// Cambiaremos diferentes propiedades
user.age = user.age - 1;

console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);
console.log(user.job);


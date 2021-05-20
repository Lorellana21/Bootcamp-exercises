`use strict`;

/*Tenemos un array con el listado de usuarios de nuestra aplicación y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda' */

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
const greetingNames = names.map((name) => "Bienvenida " + name);

console.log(greetingNames);

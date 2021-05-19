`use strict`;

/*Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
Nombre
Apellidos
Teléfono
Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente.

*/
const form = [
  {
    name: "Lorena",
    surname: "Orellana",
    phone: "666 555 888",
  },
  {
    name: "Silvia",
    surname: "España",
    phone: "666 111 222",
  },
  {
    name: "Dayana",
    surname: "Romero",
    phone: "666 555 333",
  },
];

console.log(form[0].name);

const input1 = document.querySelector(".js-input1");
console.log(input1);

const mother = input1.parentElement;

console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
    mother.className
  }`
);

`use strict`;

/*Crea una página que contenga tres imágenes, y usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
Haz lo mismo para París y Nueva York
Nota: Usa imágenes que encuentres por Internet.

*/

const nameInput = document.querySelector("#cities");
const image = document.querySelector(".js-image");

console.log(nameInput.value); // Pintará el valor actual, 'madrid'

/*
Para poner un estilo, lo asignaremos usando la siguiente notación
style.propiedadCSS = 'valor'

De esta forma no modificaremos los estilos previamente asignados

Si la propiedad CSS tiene un guión (background-color) lo convertiremos a camelcase
backgroundColor
*/
image.src = "./images/madrid.jpg";

//crear una funcion

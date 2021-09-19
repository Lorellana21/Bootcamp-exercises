`use strict`;

//Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra.

const favouriteBooks = [`the little prince`, `100 years of solity`];


// bucle for...of
for (const book of favouriteBooks) {
  console.log(`A mi también me encantó "${book}" Tenemos mucho en común, humana.`);
}

`use strict`;

//Crear un array movies con un listado de 3 películas. Será un array de cadenas (strings).

const movies = [`la vida es bella`, `la la land`, `frequency`];

//Añade al array anterior otra película. Para comprobar que funciona, tienes que mostrar el array completo en la consola.

movies[3] = `harry potter`;


//Modificar la película que menos te guste de las que hay en el array por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en la consola.

movies[3] = `inside up`;


//Modificar la película que menos te guste del array por otra. De nuevo, muestra el array completo en la consola para comprobar que funcionó.

movies[0] = `kill bill`;
console.log(movies);

//Para terminar, encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies. Ejecutamos la función para comprobar que se muestran los mensajes en la consola.

function workWithMovies() {
    return console.log(movies);
}
workWithMovies();



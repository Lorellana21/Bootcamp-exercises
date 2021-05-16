`use strict`;

//Crea un array movies con un listado de 3 películas. Será un array de cadenas (strings).

const movies = [`la vida es bella`, `la la land`, `frequency`];

//Añade al array anterior otra película. Muestra el array completo en la consola.

movies[3] = `harry potter`;


//Modifica la película que menos te guste por el nombre de otra que te guste más. Muestra el array completo en la consola.

movies[3] = `inside up`;


//Modifica la película que menos te guste por otra. Muestra el array completo en la consola.

movies[0] = `kill bill`;
console.log(movies);

//Encapsula todo el código que hemos creado en una función que no toma parámetros. Ejecuta la función para comprobar que se muestran los mensajes en la consola.

function workWithMovies() {
    return console.log(movies);
}
workWithMovies();



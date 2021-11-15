'use strict';


function workWithMovies(){
//Crear array
const movies = ["La vida es bella", "Titanic", "Amelie"];
//añadir un elemento
movies[3] = "La momia";
console.log(movies);
//Modificar un elemento
movies[3] = "Venganza";
console.log(movies);

movies[0] = "El rey león";
console.log(movies);
}

workWithMovies();

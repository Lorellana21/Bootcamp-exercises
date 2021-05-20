`use strict`;

/*Tenemos las notas del examen metidas en un array: const marks = [5, 4, 6, 7, 9].
Vamos a modificar las notas de todas para añadirles 1 punto
Hay que usar map para crear un nuevo array "inflatedMarks" con las notas modificadas. 
Mostrar en la consola las notas modificadas */

const marks = [5, 4, 6, 7, 9];
const inflatedMarks = mark.map((mark) => mark + 1);

console.log(inflatedMarks);

/*const addOne = (mark) => mark + 1;
const inflatedMarks = marks.map(addOne);*/

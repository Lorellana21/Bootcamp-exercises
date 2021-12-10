"use strict";
// FINDINDEX
//Devuelve solo el primero que encuentra con la condición que le digo
const nombreBuscado = "lucía";
const studentLucia = students.findIndex((student) => student.name.toLowerCase() === nombreBuscado.toLowerCase());

console.log("Estudiante lucia " + studentLucia);
console.log(students);

//students.splice(studentLucia,1);//Para sacarla del array
console.log(students); 
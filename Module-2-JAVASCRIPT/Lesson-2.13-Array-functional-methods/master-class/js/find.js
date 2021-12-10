"use strict";

// FIND 
//devuelve el primero que encuentra con la condicion que yo le paso

const studentInfo = students.find((student) => student.age === 20)
console.log("estudiante edad = 20 "+ studentInfo.name);

//Si necesitara encontrar todas las que tienen 20 ños debería usar "filter"
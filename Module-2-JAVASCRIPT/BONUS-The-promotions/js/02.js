"use strict";

const promos = [
    {
      promo: 'A',
      name: 'Ada',
      students: [
        {
          id: 'id-1',
          name: 'Sofía',
          age: 20
        },
        {
          id: 'id-2',
          name: 'María',
          age: 21
        },
        {
          id: 'id-3',
          name: 'Lucía',
          age: 22
        }
      ]
    },
    {
      promo: 'B',
      name: 'Borg',
      students: [
        {
          id: 'id-4',
          name: 'Julia',
          age: 23
        },
        {
          id: 'id-5',
          name: 'Tania',
          age: 24
        },
        {
          id: 'id-6',
          name: 'Alaia',
          age: 25
        }
      ]
    },
    {
      promo: 'C',
      name: 'Clarke',
      students: [
        {
          id: 'id-7',
          name: 'Lidia',
          age: 26
        },
        {
          id: 'id-8',
          name: 'Celia',
          age: 27
        },
        {
          id: 'id-9',
          name: 'Nadia',
          age: 28
        }
      ]
    }
  ];
  
/*
cuando---> cuando la pagina cargue
 x 1-pintar las promos con su letra
 x 2-pintar el listado de estudiantes por promo
  
cuando---> escuchar un evento y se ejecuta la funcion cuando 
//la usuaria hace click
  3- al click sobre una alumna, pintar en consola su id y nombre

*/

const ulElement = document.querySelector(".js-result");

function  paintPromos(){

  for(let i= 0; i < promos.length; i++){
    const li =  document.createElement("li");
    ulElement.appendChild(li);
    const text = document.createTextNode(promos[i].name);
    li.appendChild(text);

    //creo la lista interna de estudiantes
    const ulStudent = document.createElement("ul");
    ulStudent.classList.add("js-student");
    // esa lista sera hija de cada li
    li.appendChild(ulStudent);
    // se guardara en la constante student, cada estudiante del array
    for (const student of promos[i].students) {
      const liStudent = document.createElement("li");
      ulStudent.appendChild(liStudent);
      const textStudent = document.createTextNode(`${student.name}  ${student.age}`);
      liStudent.appendChild(textStudent);
      liStudent.setAttribute("id",student.id);
      //le creo un atributo dataset para guardar la edad
      liStudent.dataset.age = student.age;
    }
    /*for(let indexStudent= 0;indexStudent < promos[i].students.length;indexStudent++){
    }*/
  }
}
/*main*/
paintPromos();
let acc = 0;
function handlerClick(ev){
  console.log(ev.target.dataset.age);
  const age = parseInt(ev.target.dataset.age);
  if(age >=25){
    acc += age;
  }
  console.log(acc);
}
/*
const ulStudent = document.querySelectorAll(".js-student");
console.log(ulStudent);
// de esta forma tendriamos que recorrer ulStudent para escuchar evento en cada ul
*/
ulElement.addEventListener("click",handlerClick);
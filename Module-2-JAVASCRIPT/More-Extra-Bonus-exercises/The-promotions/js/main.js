'use strict';

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

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];



const resultElement = document.querySelector ('.js-result');
//Como el ul no se repite, debe ir fuera del bucle.
let htmlCode = "<ul>";

//1 Pintar en pantalla los nombres de las promos:

//Bucle para recorrer el Array y pintarlo en HTML
/*for ( let i = 0; i < promos.length; i++){
  htmlCode += `<li>${promos[i].name}</li>`;
}

for (const promo of promos){
  htmlCode += `<li>${promo.name}</li>`;
}*/


//2 Pintar en pantalla las letras y los nombres de las promos

/*for(let i = 0; i < promos.length; i++){
  htmlCode += `<li>Letra: ${promos[i].promo}, <br> Nombre: ${promos[i].name}</li>`;
}
for(const promo of promos){
  htmlCode += `<li>Letra: ${promo.promo}, Nombre: ${promo.name}</li>`;
}*/


//3 Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas

/*for(let i = 0; i < promos.length; i++){
  htmlCode += `<li>Letra: ${promos[i].promo}, Nombre: ${promos[i].name}, Número de alumnas: ${promos[i].students.length}</li>`;
}
for(const promo of promos){
  htmlCode += `<li>Letra: ${promo.promo}, Nombre: ${promo.name}, Número de alumnas: ${promo.students.length}</li>`;
}*/

//4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas

// for (let i = 0; i < promos.length; i++) {
//   for (let j = 0; j < promos[i].students.length; j++) {
//     htmlCode += `<li><p>${promos[i].students[j].name} es de la promo ${promos[i].name} y tiene ${promos[i].students[j].age} años</li>`;
//   }
// }

//5 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas

/*for (let i = 0; i < promos.length; i++) {
  for (let j = 0; j < promos[i].students.length; j++) {
    htmlCode += `<li><p ${promos[i].students[j].id}>${promos[i].students[j].name} es de la promo ${promos[i].name} y tiene ${promos[i].students[j].age} años</li>`;
  }
}*/

//6 Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par


  for (let i = 0; i < promos.length; i++) {
      for (let j = 0; j < promos[i].students.length; j++) {
        if(promos[i].students[j].age %2 === 0){
          htmlCode += `<li><p ${promos[i].students[j].id}>${promos[i].students[j].name} es de la promo ${promos[i].name} y tiene ${promos[i].students[j].age} años</li>`;
        }
      }
}





htmlCode += "</ul>";
resultElement.innerHTML = htmlCode;
  
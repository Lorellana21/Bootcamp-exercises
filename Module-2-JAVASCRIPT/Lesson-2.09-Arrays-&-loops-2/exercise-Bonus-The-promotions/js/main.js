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

// 1 Pintar en pantalla los nombres de las promos:

const resultElement = document.querySelector ('.js-result');

/*for ( let i = 0; i < promos.length; i++){
resultElement.innerHTML += `<ul><li>${promos[i].name}</li></ul>`;
}

for (const promo of promos){
  resultElement.innerHTML += `<ul><li>${promo.name}</li></ul>`;
}*/

//2 Pintar en pantalla las letras y los nombres de las promos

for(let i = 0; i < promos.length; i++){
  resultElement.innerHTML += `<ul><li>Letra: ${promos[i].promo}, Nombre: ${promos[i].name}</li></ul>`;
}
for(const promo of promos){
  resultElement.innerHTML += `<ul><li>Letra: ${promo.promo}, Nombre: ${promo.name}</li></ul>`;
}


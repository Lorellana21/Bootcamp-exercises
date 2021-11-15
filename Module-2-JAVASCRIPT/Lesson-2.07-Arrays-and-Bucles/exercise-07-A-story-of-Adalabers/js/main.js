'use strict';

const adalabers = [
  {
    name: 'María',
    age: '29',
    job: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: '31',
    job: 'ingeniera química'
  },
  {
    name: 'Susana',
    age: '34',
    job: 'periodista'
  },
  {
    name: 'Rocío',
    age: '25',
    job: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: '21',
    job: 'diseñadra'
  },
];

// Devuelve el número de adalabers en el listado.
function countAdalabers(){
    // console.log(adalabers.length);
}
countAdalabers(adalabers);


// Devuelve la media de edad de listado
  function averageAge(){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
   sum += arr[i].age;
  }
  console.log(`la media de edad es ${sum} / arr.lenght`);
}
averageAge(adalabers);

// function theYoungest(){
//   for(const adalaber of adalabers){
//     console.log(adalaber.age);
//     if(adalaber.age <=21){
//       console.log(adalaber.name)
//     }
//   }
// }
// theYoungest(adalabers)

function countDesigners(){
  for(const adalaber of adalabers){
    if(adalaber.job === "diseñadora"){
      console.log(adalaber.name);
    }
  }
}
countDesigners(adalabers);
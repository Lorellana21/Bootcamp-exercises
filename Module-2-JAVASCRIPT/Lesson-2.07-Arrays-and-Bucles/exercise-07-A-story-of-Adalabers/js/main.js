'use strict';

  const adalabers = [
    { name: 'María', age: 29, job: 'diseñadora' },
    { name: 'Lucía', age: 31, job: 'ingeniera química' },
    { name: 'Susana', age: 34, job: 'periodista' },
    { name: 'Rocío', age: 25, job: 'actriz' },
    { name: 'Inmaculada', age: 21, job: 'diseñadora' }
  ];


// Devuelve el número de adalabers en el listado.
function countAdalabers(){
    return adalabers.length;
}


// Devuelve la media de edad de listado
  function averageAge(){
    let sum = 0;
    for(const adalaber of adalabers){
     sum += adalaber.age;
  }
  return sum / adalabers.length;
}

//Devuelve el nombre de la más joven:
function theYoungest(){
  let youngestName = "";
  let youngestAge = 100;

  for(const adalaber of adalabers){//Estoy creando la constante "adalaber"
    // console.log(adalaber.age);
    if(youngestAge > adalaber.age){
      // console.log(adalaber);
      youngestAge = adalaber.age;
      youngestName = adalaber.name;
     }
  }
  console.log(youngestAge, youngestName);
}

// Other way of doing it:
// function theYoungest2(students) {
//   let youngestStudent = students[0];
//   for (const student of students) {
//     if (student.age < youngestStudent.age) {
//       youngestStudent = student;
//     }
//   }
//   return youngestStudent;
// }

//Devuelve las que son diseñadoras:
function countDesigners(){
  let count = 0;
  for(const adalaber of adalabers){
    if(adalaber.job === 'diseñadora'){
      count++
    }
  }
  return count;
}

console.log(countAdalabers(adalabers));
console.log(averageAge(adalabers));
console.log(theYoungest(adalabers));
// console.log(theYoungest2(adalabers));
console.log(countDesigners(adalabers));
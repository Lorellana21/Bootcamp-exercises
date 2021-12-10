'use strict';





const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true }
];

//Nuevo array solo con los estudiantes
const students = runners.filter(runner => {
  if(runner.student === true){
    return runner.name;
  }
});
console.log(students);

//Ahora quiero saber quien de ellos ha ganado
const winner = function (acc, student) {
    if (student.time < acc.time) {
      return (acc = student);
    } else {
      return acc;
    }
  };
  
  const winnerStudent = students.reduce(winner);
  console.log("El ganador es:", winnerStudent.name);

  //Otther option
  const studentWinner = runners
  .filter((runner) => runner.student === true)
  .reduce((acc, runner) => {
    if (acc.time > runner.time) {
      return runner;
    } else {
      return acc;
    }
  });

console.log(studentWinner.name);

//Another option
const winnerName = runners.filter(runner => runner.student ===true).reduce(winner);
console.log("El ganador es:", winnerName.name);





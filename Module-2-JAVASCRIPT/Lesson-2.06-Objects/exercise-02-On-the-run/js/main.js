'use strict';

const adalaber = {
  name : "Susana",
  age : 34,
  job : "periodista",
}
//Método con función arrow con parámetros:
adalaber.run = verb => `Estoy ${verb}`
console.log(adalaber.run('corriendo'));

// Método con función arrow sin parámetros
adalaber.run = () => `Estoy corriendo`;
console.log(adalaber.run());

//Método con parámetro:
adalaber.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber.runAMarathon(50));



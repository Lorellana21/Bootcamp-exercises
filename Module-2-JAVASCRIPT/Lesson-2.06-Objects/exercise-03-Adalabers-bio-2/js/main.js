'use strict';

const adalaber1 = {
  name : "Susana",
  age : 34,
  job : "periodista",
}

//Crear un método con datos del objeto:
adalaber1.showBio = function(){
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
}
console.log(adalaber1.showBio());

const adalaber2 = {}
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz"

adalaber2.showBio = function(){
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
}
console.log(adalaber2.showBio());
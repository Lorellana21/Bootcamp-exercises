"use strict";

//FILTER

const ulElement = document.querySelector(".js-students");
const hTitle = document.querySelector(".js-title");

const age= 22;
const arrayFilter =  students.filter((student)=> student.age === age)
console.log(arrayFilter);

function paintFilter(){
  hTitle.innerHTML = "Las estudiantes filtradas a continuacion";
  for(const filter of arrayFilter){
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    const textElement = document.createTextNode(filter.name);
    liElement.appendChild(textElement);
  }
}
paintFilter()
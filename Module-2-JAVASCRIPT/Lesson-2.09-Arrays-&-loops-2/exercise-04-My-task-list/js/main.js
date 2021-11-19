'use strict';
/*
Proceso 1:
1- Cuando arranque la página pinto el listado de tareas.
2- Escuchar un evento sobre las tareas pintadas

Proceso 2:
1. Una vez que la usuaria ha clicado:
- recoger en qué elemento ha hecho click
- modificar datos (estado de la tarea)
- volver a pintar mis tareas
- escuchar evento
*/

const ulElement = document.querySelector ('.js-list');

/*Cada posición de este array es un objeto que tiene 2 propiedades*/
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

function paintTasks(){
  let html = ""; //variable que contiene los li
  let className = "";
  let checked = "";

  for(let i = 0; i < tasks.length; i++){
    let task = tasks[i];
     
    if(task.completed === true){
      className = "completed-task";
      checked = "checked";
    }
    else{
      className = "";
      checked = "";
    }
    //Se pinta en tres líneas por mejor visualización, pero puede ir perfectamente en una sola.
    html += `<li class="${className}">`
    html += `<input class="js-checkbox" type="checkbox" value="${i}" ${checked}/>`
    html += `${task.name}</li>`
  }
  ulElement.innerHTML = html;
  listenClick();
}

function listenClick(){
  const checkboxElements = document.querySelectorAll ('.js-checkbox');//Aqui se crea un array
//Ahora tengo que escuchar un evento sobre cada uno de los elementos del array, por eso hay que recorrerlo.
for(let i = 0; i < checkboxElements.length; i++){
  checkboxElements[i].addEventListener("change", handlerCheck);
}
}

function handlerCheck(event){
console.log(event.target.value);
const clicked = event.target.value;
tasks[clicked].completed = !tasks[clicked].completed;//Le pone el valor contrario a lo que tiene. Solo sirve para booleanos
//Volver a pintar:
paintTasks();

}



paintTasks();
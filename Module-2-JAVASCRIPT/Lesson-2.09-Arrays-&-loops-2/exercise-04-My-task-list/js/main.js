'use strict';

const textElement = document.querySelector ('.js-text');
const listElement = document.querySelector ('.js-list');


const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

// textElement.innerHTML += `Hay ${tasks.length} tareas`;


function paintTasks(){
  let html = "";
  let className = "";
  let checked = "";
  for (let i = 0; i < tasks.length; i++){
    let task = tasks[i];
    if(task.completed === true){
      className = "completed-task";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    html += `<li class="${className}">`;
    html += `<input type="checkbox" class="js-checkbox" value="${i}" ${checked}/>`;
    html += `${task.name}</li>`;
}
listElement.innerHTML = html;
listenClickChecked();
}
paintTasks();

function listenClickChecked(){
  const checkboxElements = document.querySelectorAll (".js-checkbox");
  for(let i = 0; i < checkboxElements.length; i++){
    checkboxElements[i].addEventListener("change", handlerCheck);
  }
}

function handlerCheck(event){
  const clicked = event.target.value;
  if(tasks[clicked].completed === true){
    tasks[clicked].completed = false;
  } else {
    tasks[clicked].completed = true;
  }
  paintTasks();


// // Bucle que recorra el array para extraer los true y false en completed
//   for(let i = 0; i < clicked.length; i++){
//     const results = `Tienes ${tasks.length} tareas. ${tasks.completed} completadas y ${tasks.completed} por realizar`;
//     //Añado párrafo para las Tareas totales
//     textElement.innerHTML = `<p class="${results}"></p>`;
//   }
  
}

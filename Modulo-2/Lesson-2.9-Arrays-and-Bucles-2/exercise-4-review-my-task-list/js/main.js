`use strict`;

/*Procesos necesarios
Proceso 1
1.1 Cuando arranque la página debo pintar el listado de tareas
1.2 escuchar un evento sobre las tareas pintadas

Proceso 2
Una vez que la usuaria ha clickado
2.1 recoger en qué elemento ha hecho click
2.2 modificar los datos (estado de la tarea)
2.3 volver a pintar mis tareas
2.4 escuchar evento
*/

//Aplicación para gestionar un listado de tareas, tenemos que:

//1. Mostrar una frase que indique cuántas tareas hay.
//2. Pintar todas las tareas en pantalla.
//3. Tachar las ya realizadas.
//4. Permitir marcar una tarea como 'completa' o 'incompleta'.

//Vamos a partir de este array de datos en nuestro fichero JavaScript:

const ulElement = document.querySelector (".js-list");

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ]

//a) Primero vamos a pintar las tarea en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.

function paintTasks(){
  let html = ""; //variable creada en vacío, va a contener todos los <li>
  for (let i = 0; i < tasks.length; i++){
      let task = tasks[i]; //En la primera iteracion a la variable task, le voy a añadir el objeto que tiene mi listado en esa posicion.

      html += `<li>`;
      html += `<input type="checkbox" value="${i}" />`;
      html += `${tasks.name} </li>`;
  }
  ulElement.innerHTML = html
}
paintTasks();

//b) Ahora vamos a pintar en pantalla todas la tareas, cada una de las tareas completadas debe aparecer tachada.

//c) Ahora vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
//1. la tarea debe mostrarse como completada (tachada)
//2. debemos modificar su estado (propiedad completed) en el array tasks.


//d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.
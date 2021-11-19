## Mi lista de tareas

Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:

1. Mostrar una frase que indique cuántas tareas hay.
1. Pintar todas las tareas en pantalla.
1. Tachar las ya realizadas.
1. Permitir marcar una tarea como 'completa' o 'incompleta'.

Vamos a partir de este array de datos en nuestro fichero JavaScript:

```
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
```

a) **Vamos a por una tarea**. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada `completed: true`, el texto aparezca tachado.

b) **Listado de tareas**. Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.

c) **Vamos a darle dinamismo**. Vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un `input` de tipo `checkbox` al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:

- la tarea debe mostrarse como completada (tachada)
- debemos modificar su estado (propiedad completed) en el array `tasks`.

d) **Tareas totales**. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.

---

## My To-Do List

We have created an application to manage a list of tasks: we are very busy people! For that, we have created a literal object with the list of tasks and their status. Our mission is:

1. Display a sentence indicating how many tasks there are.
1. Paint all the tasks on screen.
1. Cross out the ones already done.
1. Allow to mark a task as 'complete' or 'incomplete'.

Let's start from this array of data in our JavaScript file (above).

a) **Let's go for a task**. First we are going to paint a task, just one, in an HTML list. Then we are going to prepare a class that modifies it, so that if it were a completed task `completed: true`, the text would appear crossed out.

b) **List of tasks**. Now we are going to paint on the screen all the tasks we have in the list, each of the completed tasks must be crossed out.

c) **Let's make it dynamic**. We are going to add the necessary logic to complete tasks. To do this we are going to add a checkbox input at the end of each task that we have yet to complete. The checkbox for completed tasks must be checked. In addition, when the user marks the task as completed by checking the checkbox, several things should happen:

- the task must be shown as completed (crossed out)
- we must modify its status (completed property) in the tasks array.

d) **Total tasks**. Let's add above the task list a sentence saying: You have X tasks. Y completed and Z to be done. Every time a task is checked/unchecked we should update this information.

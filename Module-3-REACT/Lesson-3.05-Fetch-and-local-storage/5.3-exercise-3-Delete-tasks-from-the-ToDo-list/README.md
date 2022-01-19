# Borrar tareas del ToDo list

Supongamos que la usuaria quiere borrar alguna de las tareas del ToDo list. Para ello debemos poner un botón de borrar (o un icono) a la derecha de cada tarea. Sigamos los siguientes pasos:

1. Añadir un botón, icono o lo que queramos dentro de cada <li />.
   - A este botón hay que añadirle una función manejadora.
   - A este botón hay que añadirle también un `id` con el índice de la tarea, para luego identificarla dentro de la función manejadora.
2. Crear la función manejadora, en ella:
   - Obtenemos el índice de la tarea clickada.
   - Borramos la tarea del array.
   - Guardamos el array en el estado de React.

---

# Adding new tasks to the ToDo list

Suppose that the user wants to delete some of the tasks in the ToDo List. To do this we have to put a delete button (or icon) to the right of each task.

1. Add a button, icon or whatever you want inside each <li />.
   - A handler function must be added to this button.
   - An `id` with the task index must also be added to this button, in order to identify the task within the handler function.
2. Create the handler function, in it:
   - Get the index of the clicked task.
   - Delete the task from the array.
   - Save the array in the React state.

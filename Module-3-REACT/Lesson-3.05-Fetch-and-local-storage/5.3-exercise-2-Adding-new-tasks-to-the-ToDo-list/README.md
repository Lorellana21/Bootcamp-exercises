# Añadir nuevas tareas al ToDo list

Queremos que la usuaria pueda añadir nuevas tareas a su listado.

1. Añadir un input de texto en algún sitio de la página.
   - Cuando este input cambie debemos guardarlo en el estado de React, por ejemplo en `newTaskInput`.
2. Añadir un botón con el texto "Crear nueva tarea".
   - Cuando la usuaria pulse en este botón debemos pushear al array de tareas un nuevo objeto.
   - El objeto debe tener la propiedad `task`, cuyo valo es lo que haya en ese momento en `newTaskInput`.
   - El objeto debe tener la propiedad `completed` con valor `false`.
3. Si todo está bien hecho React renderizará el componente y aparecerá en pantalla la nueva tarea.

También puedes hacer que cuando la usuaria pulse en el botón "Crear nueva tarea", el valor del input de texto se limpie. Para ello debes:

1. Modificar el estado de newTaskInput.
2. Controlar el input de texto.

---

# Adding new tasks to the ToDo list

We want the user to be able to add new tasks to her ToDo list.

1. Add a text input somewhere on the page.
   - When this input changes we should save it in the React state, for example in `newTaskInput`.
2. Add a button with the text "Create new task".
   - When the user clicks on this button we must push a new object to the task array.
   - The object must have the task property, whose value is whatever is currently in `newTaskInput`.
   - The object must have the `completed` property set to `false`.
3. If everything is done correctly, React will render the component and the new task will appear on the screen.

You can also make that when the user clicks on the "Create new task" button, the value of the text input is cleared. To do this you must:

1. Modify the state of newTaskInput.
2. Control the text input.

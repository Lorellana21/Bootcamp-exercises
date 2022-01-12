# ToDo list con los datos en el estado

Partiendo del ejercicio anterior del ToDo list vamos a programar su interacción: queremos que cuando la usuaria pulse en una tarea se des / marca como tachada. Para ello:

1. Mete el array de objetos de las tareas en el estado con:

```
const [tasks, setTasks] = useState([
  { task: 'Comprar harina, jamón y pan rallado', completed: true },
  { task: 'Hacer croquetas ricas', completed: true },
  { task: 'Ir a la puerta de un gimnasio', completed: false },
  { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
]);
```

2. Añade a cada `<li />` un evento de tipo click con una función manejadora.
3. Añade a cada `<li />` un id con un índice para identificar de manera única cada tarea.
4. Crea la función manejadora en la que:
   - Obtener el índice de la tarea clickada.
   - Invertir la propiedad `completed` de la tarea clickada.
   - Guardar en el estado el array modificado.

Te recomendamos que uses debugger dentro de la función manejadora para facilitarte la vida.

---

# ToDo list with the data in the status

Starting from the previous ToDo list exercise, we are going to programme its interaction: we want that when the user clicks on a task, it is un / marked as crossed out. To do this:

1. Put the array of objects of the tasks in the state with:

```
const [tasks, setTasks] = useState([
  { task: 'Comprar harina, jamón y pan rallado', completed: true },
  { task: 'Hacer croquetas ricas', completed: true },
  { task: 'Ir a la puerta de un gimnasio', completed: false },
  { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
]);
```

2. Add to each `<li />` a click event with a handler function.
3. Add to each `<li />` an id with an index to uniquely identify each task.
4. Create the handler function in which:
   - Get the index of the clicked task.
   - Invert the `completed` property of the clicked task.
   - Save the modified array in the state.

We recommend that you use a debugger inside the handler function to make your life easier.

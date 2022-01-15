import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "123", task: "Comprar harina, jamón y pan rallado", completed: true },
    { id: "456", task: "Hacer croquetas ricas", completed: true },
    { id: "678", task: "Ir a la puerta de un gimnasio", completed: false },
    {
      id: "910",
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);

  const [filterTask, setFilterTask] = useState("");
  const [searchIsCompleted, setSearchIsCompleted] = useState(false);

  // Eventos
  // Función manejadora que se ejecuta cuando la usuaria pulsa en una tarea
  const handleCompleted = (ev) => {
    //debugger;
    // Obtener el índice de la tarea clickada.
    const clickedTaskId = ev.currentTarget.id;
    console.log(clickedTaskId);
    // Buscamos la tarea pulsada
    const clickedTask = tasks.find((task) => task.id === clickedTaskId);
    //console.log(clickedTask);
    // Invertir la propiedad `completed` de la tarea clickada.
    clickedTask.completed = !clickedTask.completed;

    // Guardar en el estado el array modificado.
    setTasks([...tasks]);
  };

  const handleFilteredTask = (ev) => {
    setFilterTask(ev.target.value);
  };

  const handleSearchIsCompleted = (ev) => {
    setSearchIsCompleted(ev.target.checked);
  };

  // Funciones de renderizado
  const renderTasks = () => {
    return (
      tasks
        //Filtramos por nombre
        .filter((task) => {
          return task.task.toLowerCase().includes(filterTask.toLowerCase());
        })
        // Filtramos por completada
        .filter((task) => {
          if (searchIsCompleted === true) {
            return task.completed === true;
          } else {
            return true;
          }
        })
        //Mapeamos
        .map((task) => {
          return (
            // Renderizamos cada tarea añdiendo el atributo id
            <li key={task.id} id={task.id} onClick={handleCompleted}>
              <h2>{task.task}</h2>
              <p>
                La tarea está:
                {task.completed === true ? "Completada" : "por hacer"}
              </p>
            </li>
          );
        })
    );
  };

  return (
    <div>
      <h1>Lista de tareas:</h1>
      <ul>{renderTasks()}</ul>
      <form>
        <label htmlFor="filterTask">Buscar por nombre de tarea</label>
        <input
          type="text"
          id="filterTask"
          value={filterTask}
          onChange={handleFilteredTask}
        />
      </form>
      <p>Tareas totales:{tasks.length}</p>
      <p>Tareas completadas:</p>
      <p>Tareas pendientes:</p>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import ls from "../services/localStorage";

const App = () => {
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);

  // Función manejadora que se ejecuta cuando la usuaria pulsa en una tarea
  const handleClick = (ev) => {
    //debugger;
    // Obtener el índice de la tarea clickada.
    const clickedTaskId = ev.currentTarget.id;
    console.log(clickedTaskId);
    // Buscamos la tarea pulsada
    const clickedTask = tasks.find(
      (task) => task.id === parseInt(clickedTaskId)
    );
    //console.log(clickedTask);
    // Invertir la propiedad `completed` de la tarea clickada.
    clickedTask.completed = !clickedTask.completed;

    // Guardar en el estado el array modificado.
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        // Renderizamos cada tarea añdiendo el atributo id
        <li key={index} id={index} onClick={handleClick}>
          <h2>{task.task}</h2>
          <p>
            La tarea está:
            {task.completed === true ? "Completada" : "por hacer"}
          </p>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de tareas:</h1>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default App;

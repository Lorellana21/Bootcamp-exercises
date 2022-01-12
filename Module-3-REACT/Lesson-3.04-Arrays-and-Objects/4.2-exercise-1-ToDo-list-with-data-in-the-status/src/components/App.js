import { useState } from "react";

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
    // Obtener el índice de la tarea clickada.
    // Invertir la propiedad `completed` de la tarea clickada.
    // Guardar en el estado el array modificado.
    debugger;
  };

  const renderTasks = (i) => {
    return tasks.map((task) => {
      return (
        // Renderizamos cada tarea añdiendo el atributo id
        <li
          key={i}
          id={i}
          className={task.completed === true ? "done" : ""}
          onClick={handleClick}
        >
          <h2>{task.task}</h2>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de series favoritas:</h1>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default App;

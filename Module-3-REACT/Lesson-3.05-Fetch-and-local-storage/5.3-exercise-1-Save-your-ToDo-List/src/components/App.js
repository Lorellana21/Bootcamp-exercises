import { useEffect, useState } from "react";
import ls from "../services/localStorage";

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

  const [searchTask, setSearchTask] = useState(ls.get("searchTask", ""));

  useEffect(() => {
    ls.set("searchTask", searchTask);

    
    console.log("Ha cambiado la tarea");
  }, [searchTask]);

  
  const handleCompleted = (ev) => {
    
    const clickedTaskId = ev.currentTarget.id;
    console.log(clickedTaskId);
    
    const clickedTask = tasks.find((task) => task.id === clickedTaskId);
    
    clickedTask.completed = !clickedTask.completed;

    
    setTasks([...tasks]);
  };

  const handleSearchTask = (ev) => {
    setSearchTask(ev.target.value);
  };

  // Funciones de renderizado
  const renderTasks = () => {
    return (
      tasks
        
        .filter((task) => {
          return task.task.toLowerCase().includes(searchTask.toLowerCase());
        })
        
        .map((task) => {
          return (
            
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
        <label htmlFor="searchTask">Buscar por nombre de tarea</label>
        <input
          type="text"
          id="searchTask"
          value={searchTask}
          onChange={handleSearchTask}
        />
      </form>
    </div>
  );
};

export default App;

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
  const [newTaskInput, setNewTaskInput] = useState("");

  const handleClick = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    console.log(clickedTaskId);

    const clickedTask = tasks.find(
      (task) => task.id === parseInt(clickedTaskId)
    );
    clickedTask.completed = !clickedTask.completed;

    setTasks([...tasks]);
  };
  const handleNewTask = (ev) => {
    setNewTaskInput(ev.target.value);
  };
  const handleButton = (ev) => {
    ev.preventDefault();
    tasks.push({
      task: newTaskInput,
      completed: false,
    });
    setTasks([...tasks]);
    setNewTaskInput("");
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

      <form>
        <label htmlFor="newTask">Añade una nueva tarea:</label>

        <input
          type="newTask"
          name="newTask"
          id="newTask"
          value={newTaskInput}
          onChange={handleNewTask}
        />
        <button className="form__btn" onClick={handleButton}>
          Crear nueva tarea
        </button>
      </form>
    </div>
  );
};

export default App;

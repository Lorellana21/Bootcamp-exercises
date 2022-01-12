const App = () => {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ];

  const title = "Mi lista de tareas";

  const renderTasks = () => {
    return tasks.map((task) => {
      if (task.completed === true) {
        return <li className="completed">{task.task}</li>;
      } else {
        return <li>{task.task}</li>;
      }
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
};

export default App;

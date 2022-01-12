const App = () => {
  const tasks = [
    "Comprar harina, jamón y pan rallado",
    "Hacer croquetas ricas",
    "Ir a la puerta de un gimnasio",
    "Comerme las croquetas mirando a la gente que entra en el gimnasio",
  ];

  const title = "Mi lista de tareas";

  const renderTasks = () => {
    return tasks.map((task) => {
      //console.log(task);
      return <li>{task}</li>;
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

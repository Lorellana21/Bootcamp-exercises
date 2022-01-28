import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    const filterStudents = students.filter((student) => {
      return student.promo === "A";
    });
    return (
      <div>
        <h1>Pintar listados con React:</h1>

        {filterStudents.map((student) => {
          // cada return retorna un li
          return (
            <ul>
              <li>
                <h2>Nombre: {student.name}</h2>
                <p>Promo: {student.promo}</p>
                <p>Edad: {student.age}</p>
              </li>
            </ul>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;

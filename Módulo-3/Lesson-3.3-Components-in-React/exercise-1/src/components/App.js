import React, { Component } from "react";
import "../stylesheets/App.css";

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
    return (
      <div>
        <h1>Pintar listados con React:</h1>

        {students.map((student) => {
          const newStudents = students.filter((student) => students.promo);
          return (
            <li>
              <h2>Nombre: {student.name}</h2>
              <p>Edad: {student.age}</p>
              <p>Promo: {student.promo}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;

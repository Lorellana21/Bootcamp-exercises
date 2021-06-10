import "../stylesheets/App.css";
import React from "react";

class App extends React.Component {
  render() {
    const users = [
      { name: "Nymphadora Tonks", time: 9 },
      { name: "Cedric Diggory", time: 28 },
      { name: "Cho Chang", time: 35 },
      { name: "Luna Lovegood", time: 45 },
      { name: "Gregory Goyle", time: 56 },
    ];
    const [a, b, c] = users;

    return (
      <>
        <p>El ganador es: {a.name}</p>
        <p>El segundo clasificado es: {b.name}</p>
        <p>El tercero es: {c.name}</p>
      </>
    );
  }
}
export default App;

// Partiendo del array con los resultados de una carrera de escobas ya ordenados, vamos a sacar del array e imprimir en la consola el podium, es decir, los nombres y tiempos del primero, segundo y tercer clasificado usando destructuring del array.

// Hoy nos sentimos como si fuera nuestro cumpleaños así que vamos a crear un componente funcional con un texto y un botón que diga "Hazme más viejo". El texto contendrá la frase: "Hoy tengo 20 años de edad", siendo 20 una variable que se actualice un año cada vez que pulse el botón. La única regla es que lo hagas por medio de hooks.

import "../stylesheets/App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(20);

  const handleButtonClick = () => {
    setNumber(number + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="button"
          value="Hazme más viejo"
          onClick={handleButtonClick}
        ></input>
      </header>
      <p className="App-intro">Hoy tengo {number} años de edad</p>
    </div>
  );
}

export default App;

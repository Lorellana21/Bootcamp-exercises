import "../stylesheets/App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(20);
  const [gift, setGift] = useState(0);

  const handleButtonClick = () => {
    setNumber(number + 1);
  };
  const handleClickGift = () => {
    setGift(gift + 1);
  };

  return (
    <div className="App">
      <input
        type="button"
        value="Hazme más viejo"
        onClick={handleButtonClick}
      ></input>
      <p className="App-intro">Hoy tengo {number} años de edad</p>
      <p>I have {gift} gifts.</p>
      <button onClick={handleClickGift}>Give my gifts</button>
    </div>
  );
}

export default App;

// Ejercicio 1: rear un componente funcional con un texto y un botón que diga "Hazme más viejo". El texto contendrá la frase: "Hoy tengo 20 años de edad", siendo 20 una variable que se actualice un año cada vez que pulse el botón. La única regla es que lo hagas por medio de hooks.

//Ejercicio 2: tener otro texto que diga "Tengo 1 regalo" con un nuevo botón "Dame regalos". Cada vez que pulse en el botón debo incrementar en uno mi número de regalos, manteniendo la funcionalidad de hacerme un año más viejo.

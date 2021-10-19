import React, { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";

// esto no es un componente de clase, por ello:
// - aquí no hay this.forceUpdate
// - aquí no hay bind
// - aquí no hay prevState

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  //mecanismo que le doy a mi hijo para que me avise de que cambia. Es una única funcion que va a manejar todos los inputs
  const handleInput = (inputId, inputValue) => {
    //El inputId
    console.log(`Ha cambiado el ${inputId} con el valor: ${inputValue}`);
    if (inputId === "email") {
      setEmail(inputValue);
    } else if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "color") {
      setColor(inputValue);
    }
  };

  const handleReset = () => {
    console.log("Han pulsado en Reset");
    setEmail("");
    setName("");
    setColor("");
  };

  return (
    <div>
      <h1>React hooks: useState avanzado</h1>
      <Form handleInput={handleInput} />
      <Preview
        email={email}
        name={name}
        color={color}
        handleReset={handleReset}
      />
    </div>
  );
};

export default App;

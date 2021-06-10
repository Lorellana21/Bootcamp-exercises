import React, { useState } from "react";
import "../stylesheets/App.css";
import Form from "./Form";
import Preview from "./Preview";

const App = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [genres, setGender] = useState([]);

  const handleInput = (value) => {
    setName(value);
  };
  //Select
  const handleFormChange = (value) => {
    setLanguage(value);
  };
  //Checkbox
  const handleCheckboxChange = (value) => {
    //setGender(value);
    // que cuando clicke para quitarlo no cuente como una seleccion mas

    if (genres.includes(value)) {
      const newGender = genres.filter((genre) => genre !== value);
      setGender(newGender);
    } else if (genres.length < 3) {
      const newGender = [...genres, value];
      setGender(newGender);
    } else {
      alert("Solo puedes elegir tres generos");
    }
  };

  return (
    //Ejercicio para completar en clases
    <>
      <Form> </Form>
      <Preview></Preview>
    </>
  );
};

export default App;

// Añadir más información a nuestro formulario de películas
// clasificación por edades, donde usaremos radio buttons con las opciones: A (todos los públicos, aparece marcada por defecto), 7, 12, 16 y 18
// género, donde usaremos checkboxes y podrán marcarse un máximo de 3 de las opciones: comedia, drama, fantasía, acción, familia, terror

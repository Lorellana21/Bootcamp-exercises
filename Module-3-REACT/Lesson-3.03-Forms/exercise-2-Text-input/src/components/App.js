import { useState } from "react";

const App = () => {
  // Creamos la constante de estado name con el valor inicial a string vacío
  const [name, setName] = useState("");

  // Creamos la función manejadora
  const handleName = (ev) => {
    // En la que guardamos el valor del input en name con setName
    setName(ev.target.value);
    //console.log(ev.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Escribe un nombre:</label>

        {/* Creamos un evento de tipo change en este input que va a ser manejada por handleName */}
        <input
          type="name"
          name="name"
          id="name"
          placeholder="María García"
          onChange={handleName}
        />

        {/* Usamos la constante name para pintarla en el HTML */}
        <p>Tu nombre es: {name}</p>
      </form>
    </div>
  );
};

export default App;

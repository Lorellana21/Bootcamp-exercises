// Fichero src/components/App.js
import { useState } from "react";

const App = () => {
  // Creamos la constante de estado size con el valor inicial a string relleno
  const [size, setSize] = useState("S");

  // Creamos la función manejadora
  const handleSize = (ev) => {
    // En la que guardamos el valor del input en size con setSize
    setSize(ev.target.value);
    //console.log(ev.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="size">Selecciona tu talla de camiseta:</label>

        {/* Creamos un evento de tipo change en este select que va a ser manejada por handleSize */}
        <select name="size" id="size" onChange={handleSize}>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>

        {/* Usamos la constante size para pintarla en el HTML */}
        <p>Tu talla de camiseta es: {size}.</p>
      </form>
    </div>
  );
};

export default App;

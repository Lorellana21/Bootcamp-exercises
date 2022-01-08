import { useState } from "react";

const App = () => {
  // Creamos la constante de estado size con el valor inicial a string vacío
  const [size, setSize] = useState("");

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

        <label htmlFor="sizeS">Talla S</label>
        {/* Creamos un evento de tipo change en este radio que va a ser manejada por handleSize */}
        <input
          type="radio"
          id="sizeS"
          name="size"
          value="S"
          onChange={handleSize}
        />

        <label htmlFor="sizeM">Talla M</label>
        {/* Creamos un evento de tipo change en este radio que va a ser manejada por handleSize */}
        <input
          type="radio"
          id="sizeM"
          name="size"
          value="M"
          onChange={handleSize}
        />

        <label htmlFor="sizeL">Talla L</label>
        {/* Creamos un evento de tipo change en este radio que va a ser manejada por handleSize */}
        <input
          type="radio"
          id="sizeL"
          name="size"
          value="L"
          onChange={handleSize}
        />

        {/* Usamos la constante size para pintarla en el HTML */}
        <p>Tu talla de camiseta es: {size}</p>
      </form>
    </div>
  );
};

export default App;

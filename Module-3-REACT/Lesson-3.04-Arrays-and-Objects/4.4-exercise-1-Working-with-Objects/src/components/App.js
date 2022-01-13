import { useState } from "react";

const App = () => {
  // Estados

  const [shipping, setShipping] = useState({});

  // Eventos

  const handleAddress = (ev) => {
    shipping.address = ev.target.value;
    setShipping({ ...shipping });
  };

  const handleCity = (ev) => {
    shipping.city = ev.target.value;
    setShipping({ ...shipping });
  };

  return (
    <div>
      <h1>Indica tu dirección para el envío:</h1>

      <form>
        <label htmlFor="address">Indica tu dirección postal:</label>
        <input
          type="text"
          id="address"
          value={shipping.address}
          onChange={handleAddress}
        />
        <label htmlFor="city">Indica tu ciudad:</label>
        <input
          type="text"
          id="city"
          value={shipping.city}
          onChange={handleCity}
        />
      </form>

      <p>
        Te lo vamos a enviar a la dirección <strong>{shipping.address}</strong>{" "}
        en la ciudad
        <strong> {shipping.city}</strong>.
      </p>
    </div>
  );
};

export default App;

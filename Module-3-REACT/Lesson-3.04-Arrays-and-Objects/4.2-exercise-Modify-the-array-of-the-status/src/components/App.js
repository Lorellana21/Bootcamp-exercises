import { useState } from "react";

const App = () => {
  // Crearmos las series en el estado indicando el array inicial
  const [series, setSeries] = useState([
    { id: "123", isFavorite: false, name: "Juego de tronos" },
    { id: "456", isFavorite: false, name: "Las chicas Gilmore" },
    { id: "678", isFavorite: false, name: "Gambita de Dama" },
  ]);

  // Función manejadora que se ejecuta cuando la usuaria pulsa en una serie
  const handleFavorite = (ev) => {
    // Obtenemos el id de la serie pintada. Este id lo estamos renderizando dentro del map
    // Por cierto aquí solo puedo usar currentTarget y no target porque quiero leer el id de li escuchado
    const clickedSerieId = ev.currentTarget.id;
    console.log(clickedSerieId);
    // Buscamos la serie pulsada
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    // Invertimos la propiedad de serie pintada, si antes era false ahora es true y viceversa
    foundSerie.isFavorite = !foundSerie.isFavorite;
    // Guardamos las series en el estado usando spread (lo explicamos más abajo)
    setSeries([...series]);
  };

  const renderSeries = () => {
    return series.map((serie) => {
      return (
        // Renderizamos cada serie añdiendo el atributo id
        <li key={serie.id} id={serie.id} onClick={handleFavorite}>
          <h2>{serie.name}</h2>
          {/* Pintamos si cada serie es favorita usando el atributo isFavorite */}
          <p>Es mi serie favorita: {serie.isFavorite ? "Sí" : "No"}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de series favoritas:</h1>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import callToApi from "../services/api";

const App = () => {
  // Estados

  const [series, setSeries] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchSeries, setSearchSerie] = useState("");

  // useEffect

  useEffect(() => {
    callToApi(searchSeries).then((response) => {
      setSeries(response);
    });
  }, [searchSeries]);

  // Eventos

  const handleSearchSerie = (ev) => {
    setSearchSerie(ev.target.value);
  };

  // Renderizado

  const renderSeries = () => {
    return series.map((serie) => {
      return (
        <li key={serie.show.id} id={serie.show.id}>
          Nombre: {serie.show.name}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Llamar al API de Series:</h1>

      <form>
        <label htmlFor="name">Busca por el nombre de tu serie favorita:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchSeries}
          onChange={handleSearchSerie}
        />
      </form>

      <h2>Series con el nombre: {searchSeries}</h2>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;

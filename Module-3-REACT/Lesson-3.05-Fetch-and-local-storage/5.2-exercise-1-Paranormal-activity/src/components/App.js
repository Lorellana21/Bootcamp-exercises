// Fichero src/components/App.js
import { useEffect, useState } from "react";
import callToApi from "../services/api";

const App = () => {
  // Estados

  const [showsData, setShowsData] = useState({});

  // Llamar al api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi().then((response) => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setShowsData(response);
      console.log(response);
    }); // Al no poner el array: la función se ejecutará siempre que se ejecute el componente App, es decir, siempre que se renderice.
  }, []); //Si pusiéramos un array vacío: solo se ejecutará la primera vez que se renderice el componente, es decir, la primera vez que se ejecute el componente App.

  return (
    <div>
      <h1>Llamar al API de Shows</h1>
    </div>
  );
};

export default App;

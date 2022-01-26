import { useState } from 'react';
import "../styles/App.scss";
import CitySelector from "./CitySelector";

function App() {

  // Necesitamos una variable estado para almacenar la ciudad seleccionada.
  // Esta variable será vigilada por React (por ese se crea con useState)
  // y cuando se actualice su valor con setCitySelected se re-generará
  // el HTML correspondiente:

  const [citySelected, setCitySelected] = useState("BCN");

  /**
   * Función que atiende los cambios en el select del componente CitySelector.
   * 
   * @param ev Evento que se genera en el select
   */

  const handleChange = (ev) => {
    setCitySelected(ev.target.value);
  }

  /**
   * Escoge una dirección de la imagen a mostrar según el valor seleccionado
   * por la usuaria.
   * 
   * @returns Dirección web (URL) de la imagen a mostrar
   */

  const chooseImage = () => {
    if (citySelected === "BCN") {
      return "https://www.oirealtor.com/noticias-inmobiliarias/wp-content/uploads/2018/10/oirealtor-noticias-vivir-en-barcelona-ciudad-noche.jpg";
    } else if (citySelected === "MAD") {
      return "https://img.blogs.es/smartcitylab/wp-content/uploads/2019/07/madrid-central-espana-1920x960.jpg";
    } else if (citySelected === "OUR") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Roman_bridge%2C_Ourense_%28Spain%29.jpg/1280px-Roman_bridge%2C_Ourense_%28Spain%29.jpg";
    } else if (citySelected === "SEV") {
      return "https://upload.wikimedia.org/wikipedia/commons/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg";
    }
  }

  const citySrc = chooseImage();

  return (
    <div className="App">
      <main>
        <form action="">
          <CitySelector handleChange={handleChange} citySelected={citySelected}></CitySelector>
        </form>
        <img className="cityImage" src={citySrc} alt="Imagen de la ciudad" />
      </main>
    </div>
  );

}

export default App;
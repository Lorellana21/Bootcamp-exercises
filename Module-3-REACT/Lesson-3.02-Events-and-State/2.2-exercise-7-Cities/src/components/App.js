import React from "react";
import "../styles/App.scss";
import CitySelector from "./CitySelector";

class App extends React.Component {

  /**
   * Necesitamos un constructor en este caso por dos razones:
   *  - Usaremos una variable común a toda la clase.
   *  - Usaremos un método handle, por lo que hay que hacerle el bind.
   * 
   * @param props Props que nos pudiesen enviar (no hace falta porque App nunca tiene props)
   */

  constructor(props) {
    super(props);

    this.citySelected = "BCN";

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Función que atiende los cambios en el select del componente CitySelector.
   * 
   * @param ev Evento que se genera en el select
   */

  handleChange(ev) {
    this.citySelected = ev.target.value;
    this.forceUpdate();
  }

  chooseImage() {
    if (this.citySelected === "BCN") {
      return "https://www.oirealtor.com/noticias-inmobiliarias/wp-content/uploads/2018/10/oirealtor-noticias-vivir-en-barcelona-ciudad-noche.jpg";
    } else if (this.citySelected === "MAD") {
      return "https://img.blogs.es/smartcitylab/wp-content/uploads/2019/07/madrid-central-espana-1920x960.jpg";
    } else if (this.citySelected === "OUR") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Roman_bridge%2C_Ourense_%28Spain%29.jpg/1280px-Roman_bridge%2C_Ourense_%28Spain%29.jpg";
    } else if (this.citySelected === "SEV") {
      return "https://upload.wikimedia.org/wikipedia/commons/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg";
    }
  }

  render() {

    // Llamo al método chooseImage que comprueba el valor de la variable citySelected
    // y devuelve la dirección de la imagen relacionada.

    let citySrc = this.chooseImage();

    return (
      <div className="App">
        <main>
          <form action="">
            <CitySelector handleChange={this.handleChange} citySelected={this.citySelected}></CitySelector>
          </form>
          <img className="cityImage" src={citySrc} alt="Imagen de la ciudad" />
        </main>
      </div>
    );
  }
}

export default App;
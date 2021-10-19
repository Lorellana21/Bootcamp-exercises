import "../stylesheets/App.css";
import React from "react";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      textarea: "",
      select: "",
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  //manejo los 3, pero por separado:

  handleChangeInput(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeTextarea(event) {
    this.setState({ textarea: event.target.value });
  }
  handleChangeSelect(event) {
    this.setState({ select: event.target.value });
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeInput}
          />
          <label>
            Descripción:
            <textarea
              id="textarea"
              value={this.state.textarea}
              onChange={this.handleChangeTextarea}
            />
          </label>
          <label>
            Elige tu idioma:
            <select
              value={this.state.select}
              onChange={this.handleChangeSelect}
            >
              <option selected value="español">
                Español
              </option>
              <option value="inglés">Inglés</option>
              <option value="portugués">Portugués</option>
            </select>
          </label>
        </form>
        <article>
          <p>Tu peli favorita es: {this.state.name}</p>
          <p>Trata sobre: {this.state.textarea}</p>
          <p>Idioma: {this.state.select}</p>
        </article>
      </>
    );
  }
}
export default MovieForm;

// Crear un formulario en un componente de React que recoja información de una película:
// nombre, en un campo de texto
// descripción, en un textarea
// idioma, en un select donde podemos seleccionar entre Español, Inglés o Portugués
// El resultado de rellenar el formulario, debe aparecer en una tarjeta de previsualización que va mostrando la información según se rellena.

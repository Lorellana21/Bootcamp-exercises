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
    // const name = this.state.name;
    // const textarea = this.state.textarea;
    // const select = this.state.select;
    const { name, textarea, select } = this.state;
    return (
      <>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChangeInput}
          />
          <label>
            Descripción:
            <textarea
              id="textarea"
              value={textarea}
              onChange={this.handleChangeTextarea}
            />
          </label>
          <label>
            Elige tu idioma:
            <select value={select} onChange={this.handleChangeSelect}>
              <option selected value="español">
                Español
              </option>
              <option value="inglés">Inglés</option>
              <option value="portugués">Portugués</option>
            </select>
          </label>
        </form>
        <article>
          <p>Tu peli favorita es: {name}</p>
          <p>Trata sobre: {textarea}</p>
          <p>Idioma: {select}</p>
        </article>
      </>
    );
  }
}
export default MovieForm;

//destructuring de los objetos this.props y this.state.

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

    this.handleChange = this.handleChange.bind(this);
  }
  //aqui manjeo los 3
  handleChange = (event) => {
    const name = event.target.name;
    const textarea = event.target.value;
    const select = event.target.value;
    const val = event.target.value;
    this.setState({
      [name]: val,
      [textarea]: val,
      [select]: val,
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <label>
            Descripción:
            <textarea
              id="textarea"
              name="textarea"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Elige tu idioma:
            <select name="select" onChange={this.handleChange}>
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

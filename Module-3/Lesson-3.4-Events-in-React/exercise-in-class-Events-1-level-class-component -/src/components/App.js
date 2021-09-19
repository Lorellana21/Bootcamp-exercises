import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  //Funciones manejadores de eventos
  //Manejador para el input
  handleInput(ev) {
    console.log(
      "Han cambiado el input con el value ",
      ev.target.value,
      " con el evento es",
      ev
    );
  }
  //Manejador para el formulario
  handleForm(ev) {
    ev.preventDefault();
    console.log("Han cambiado el formulario con el evento es", ev);
  }

  //Manejador para el Button
  handleButton(ev) {
    console.log("Han cambiado el boton con el evento es", ev);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1>Eventos en React</h1>
        <h2>Un solo nivel de componentes</h2>
        <h2>Y con componente funcional</h2>
        <form onSubmit={this.handleForm}>
          <label className="form__label" htmlFor="email">
            Escribe tu email
          </label>
          <input
            className="form__input-text display-block"
            type="text"
            name="email"
            id="email"
            onChange={this.handleInput}
          />
          <button className="form__btn" onClick={this.handleButton}>
            Púlsame
          </button>
        </form>
        <p>Fecha del último renderizado: {new Date().toLocaleString()}</p>
      </div>
    );
  }
}

export default App;

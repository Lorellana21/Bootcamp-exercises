// Vamos a partir de una web sencilla con un input de tipo texto y un párrafo vacío. ¿Seremos capaces de hacer que con React y el estado, cuando modificamos el input aparezca el texto en el párrafo?

import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.text}</p>;
      </>
    );
  }
}
export default App;

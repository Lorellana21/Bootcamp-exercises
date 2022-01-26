import React from "react";
import Destiny from "./Destiny";

class App extends React.Component {
  constructor(props) {
    super(props);
    // si queremos usar this dentro de handleInputWithLifting (que casi siempre queremos) tenemos que poner esta línea
    this.handleInputWithLifting = this.handleInputWithLifting.bind(this);
  }

  // métodos manejadores de eventos

  handleInputWithLifting(inputValue) {
    console.log("Han cambiado el input de mi hija con el valor ", inputValue);
    this.forceUpdate();
  }

  // método de pintado

  render() {
    //const date = new Date().toLocaleString();
    return <Destiny></Destiny>;
  }
}

export default App;

import React from "react";
import "../stylesheets/App.css";
import OnionHater from "./OnionHater"; //Importando el componente

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <OnionHater></OnionHater>;
  }
}

export default App;

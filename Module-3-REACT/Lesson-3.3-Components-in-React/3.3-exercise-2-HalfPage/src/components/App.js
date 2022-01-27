import React from "react";
import Halfpage from "./Halfpage";
import '../stylesheets/App.scss';


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Halfpage>
          <h1>Primera mitad</h1>
          <p>Estoy en la izquierda</p>
        </Halfpage>
        <Halfpage>
          <h1>Segunda mitad</h1>
          <p>Estoy en la derecha</p>
        </Halfpage>
      </div>
    );
  }
}

export default App;

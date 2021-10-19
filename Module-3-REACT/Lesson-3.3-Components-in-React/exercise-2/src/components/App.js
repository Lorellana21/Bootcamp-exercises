import React from "react";
import Halfpage from "./Halfpage";

//Desarrolla un componente HalfPage que mida el 50% de ancho del viewport. Este componente debe recibir de su componente madre código JSX.
//Desde el componente madre App usa el componente HalfPage y pásale un H1 y un párrafo que ponga "Estoy en la izquierda".
//Desde el componente madre App añade un segundo HalfPage y pásale un H2 y otro párrafo que ponga "Estoy en la derecha".
//El resultado debería ser que en la mitad izquierda de la página debe aparecer el H1 y el "Estoy en la izquierda" y el la mitad derecha el H2 y el "Estoy en la derecha".

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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

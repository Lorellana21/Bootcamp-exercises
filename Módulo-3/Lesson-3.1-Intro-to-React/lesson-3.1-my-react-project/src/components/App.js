import React, { Component } from "react";
import "../stylesheets/App.css";

//Asignar nombres a las variables
//Partiendo del ejercicio anterior vamos a hacer que el return de render() devuelva una sola variable, para ello, vamos a extraer a variables cada una de las "etiquetas" del contenido del return del ejercicio original. Por ejemplo, una variable para la cabecera, y otra para el párrafo. Haremos que los nombres de nuestras variables sean descriptivos y, cuando sea posible, cortos.

class App extends Component {
  render() {
    const classOfH1 = "App-body";
    const appParagraph = (
      <p className="App-intro">
        Lorem ipsum dolor sit amet consectetur adipiscing elit mauris dui porta
        fermentum, fames sociosqu blandit dictum arcu ridiculus duis sodales
        nulla parturient, accumsan consequat donec augue primis vehicula non
        mollis urna cum. Sociis imperdiet curabitur nulla condimentum urna
        interdum velit integer metus fermentum, vestibulum rhoncus gravida ante
        venenatis duis nostra a hac, massa nunc taciti aptent magna nam aliquam
        dui ut. Ullamcorper rhoncus et sem id ante aenean penatibus parturient
        cum sapien vitae potenti, odio interdum risus senectus justo litora
        scelerisque donec mollis habitasse.
      </p>
    );
    const appBody = (
      <div className={classOfH1}>
        <h1 className="App-title">Alex Guerrero</h1>
        <h2>Lunes 26 de junio de 2017</h2>
        {appParagraph}
      </div>
    );
    return appBody;
  }
}

export default App;

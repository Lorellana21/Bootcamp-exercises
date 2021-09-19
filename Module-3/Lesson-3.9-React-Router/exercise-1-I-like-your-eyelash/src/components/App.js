import "../stylesheets/App.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/pricing" component={Pricing} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}
export default App;

// Crear una web con 3 pestañas: 'home', 'pricing' y 'about'. Para eso, lo primero vamos a crear un nuevo proyecto con create-react-app.
// Ahora, creamos 3 componentes, uno por cada pestaña con un contenido lorem y con el nombre de la pestaña.
// Luego, en nuestro componente principal (App) vamos a dibujar las 3 pestañas (3 enlaces) con el nombre de cada una y ocupando el 100% del ancho de la ventana.
// Finalmente instalamos React Router en nuestro proyecto, y conseguimos que al pinchar en una pestaña, se pinte debajo el componentne correspondiente. ¡A por ello!

import "../styles/App.scss";
import React from "react";
import PokeListClase from "./PokeListClase";
import data from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }

  render() {
    return (
      <>
        <header>
          <h1>Mi lista de Pokemons</h1>
        </header>
        <main>
          <section>
            <PokeListClase pokemons={this.state.pokemons} />
          </section>
        </main>
      </>
    );
  }
}

export default App;

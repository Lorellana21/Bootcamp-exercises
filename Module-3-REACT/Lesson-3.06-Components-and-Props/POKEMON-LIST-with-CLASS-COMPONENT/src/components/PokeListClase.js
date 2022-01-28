import React from "react";
import "../styles/App.scss";
import Pokemon from "./PokemonClase";

class PokeListclase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokelist: [],
    };
    this.pokelist = this.pokelist.bind(this);
  }

  pokelist() {
    const pokelist = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
          />
        </li>
      );
    });
    this.setState({ pokelist: pokelist });
  }

  render() {
    return <ul>{this.state.pokelist}</ul>;
  }
}

export default PokeListclase;

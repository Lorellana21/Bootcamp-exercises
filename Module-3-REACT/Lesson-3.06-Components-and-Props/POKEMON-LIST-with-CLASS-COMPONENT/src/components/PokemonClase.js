import React from "react";

class PokemonClase extends React.Component {
  constructor(props) {
    super(props);
    this.typesList = this.typesList.bind(this);
  }

  typesList() {
    const types = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return types;
  }
  render() {
    const { props } = this;

    return (
      <>
        <div>
          <img src={props.url} alt={props.name} />
          <h3>{props.name}</h3>
          <ul>{typesList()}</ul>
        </div>
      </>
    );
  }
}

export default PokemonClase;

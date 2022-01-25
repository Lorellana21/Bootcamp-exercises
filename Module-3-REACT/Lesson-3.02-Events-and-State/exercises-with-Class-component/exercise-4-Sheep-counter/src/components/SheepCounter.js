import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    // así inicializamos el estado
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    // this.state siempre recibe un objeto
    // esta es la forma buena
    // le paso una función a React y él la ejecuta cuando el estado está actualizado y listo
    this.setState((prevState) => {
      //es lo mismo que esto: this.setState(function (prevState) {
      return {
        counter: prevState.counter + 1,
      };
    });
    // esta es la forma mala, se que el estado depende de sí mismo porque estoy calculando el nuevo valor de counter a partir de this.state.counter
    // this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    // es bueno pintar el estado en la primera línea del render
    console.log("El estado es", this.state);
    const result = [];
    for (let index = 0; index < this.state.counter; index++) {
      result.push(<li key={index}> Oveja {index + 1}</li>);
      console.log(result);
    }
    return (
      <div className="content">
        {/* así pintamos un campo del estado */}
        <p className="numberOfSheeps">{this.state.counter}</p>
        <button onClick={this.handleClick} className="button">
          Add a Sheep
        </button>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default SheepCounter;

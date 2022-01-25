import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    console.log("El estado es", this.state);
    const result = [];
    for (let index = 0; index < this.state.counter; index++) {
      result.push(<li key={index}> Oveja {index + 1}</li>);
      console.log(result);
    }
    return (
      <div className="content">
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

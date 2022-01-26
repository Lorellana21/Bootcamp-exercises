import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false; //valor por defecto

    this.handleOnionChange = this.handleOnionChange.bind(this);
  }

  handleOnionChange(ev) {
    if (ev.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
      this.forceUpdate(); //con esto se esta enterando de que cambia
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }

  render() {
    const className = this.isHating === true ? "foodLabelOnion" : "foodLabel";
    return (
      <>
        <div className={className}>
          ¿Qué te gusta comer?
          <input
            className="foodInput"
            id="comida"
            type="textarea"
            placeholder="Cebolla"
            onChange={this.handleOnionChange}
          ></input>
        </div>
      </>
    );
  }
}

export default OnionHater;

import React from 'react';

class Nieta extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border--medium">
        <h3 className="mb-1 ml-1">Soy una nieta y voy a merendar {this.props.comida} y voy a beber {this.props.leche}</h3>
      </div>
    );
  }
}

export default Nieta;

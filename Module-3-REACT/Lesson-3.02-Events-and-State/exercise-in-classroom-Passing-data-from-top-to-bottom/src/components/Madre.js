import React from 'react';
import Nieta from './Nieta';

class Madre extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Propiedad que viene de la abuela" + this.props.comida); 
    return (
      <div className="border--medium">
        <h3 className="mb-1 ml-1">Soy una madre</h3>
        <Nieta comida={this.props.comida} leche={this.props.bebida.leche}/>
      </div>
    );
  }
}

export default Madre;

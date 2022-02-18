import React from 'react';
import Collapsable from './Collapsable';
import Fill from "./Fill";
import Share from "./Share";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Ejercicio de collapsables</h1>

        <Collapsable title="Diseña" name="">
          <h3>Diseña aquí</h3>
          <p>Un párrafo</p>
        </Collapsable>

        <Collapsable title="Rellena">
          <Fill  image={this.props.image} updateAvatar={this.props.updateAvatar}/>
        </Collapsable>

        <Collapsable title="Comparte">
          <Share/>
          Pincha aquí para compartir
        </Collapsable>
      </div>
    );
  }
}

export default Form;

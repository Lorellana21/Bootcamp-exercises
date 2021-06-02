import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Nombre: {this.props.nombre}</h2>
        <p>Precio: {this.props.precio}</p>
      </>
    );
  }
}

// Así definimos las propTypes
Item.propTypes = {
  nombre: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Item.defaultProps = {
  nombre: "Yanelis",
};

export default Item;

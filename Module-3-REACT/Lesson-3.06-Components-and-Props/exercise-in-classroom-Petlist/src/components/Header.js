import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Ejercicio de listados</h1>
        <h2>{this.props.text}</h2>
      </>
    );
  }
}


export default Header;
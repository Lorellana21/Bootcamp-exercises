import React from 'react';

class Help extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="help">
        <p>Ayuda</p>
        {this.props.children}
      </div>
    );
  }
}


export default Help;

import React from 'react';

class Pet extends React.Component {
  render() {
    return (
      <article>
        <div className="name">{this.props.petData.name}</div>
        <div className="kind">{this.props.petData.kind}</div>
      </article>
    );
  }
}

export default Pet;
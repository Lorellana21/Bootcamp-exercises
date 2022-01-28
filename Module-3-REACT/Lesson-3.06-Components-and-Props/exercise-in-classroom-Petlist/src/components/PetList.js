import React from 'react';
import Pet from './Pet';

class PetList extends React.Component {
  render() {
    const htmlData = this.props.data.map(
      (petData, index) =>
      <li key={petData.id}>
        <Pet petData={petData}></Pet>
      </li>
      );

    return (
      <ul>
        {htmlData}
        
      </ul>
    );
  }
}


export default PetList;
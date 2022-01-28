import React from 'react';
import '../stylesheets/App.scss';
import data from '../data/mascotas.json';
import PetList from './PetList';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header text="Hola chicas"></Header>
        <main>
          <PetList data={data}></PetList>
        </main>
      </div>
    );
  }
}

export default App;

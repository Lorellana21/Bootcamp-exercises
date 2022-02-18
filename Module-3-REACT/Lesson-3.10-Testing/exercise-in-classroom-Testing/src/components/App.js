


import React from 'react';
import numbers from '../services/numbers';


const App = () => {
  const randomNumber = numbers.getRandomNumber(100);
  return (
    <div>
      <h1>Testing con React y Jest</h1>
      <p>Testeando React</p>
      <p>El número aleatorio es {randomNumber}</p>
    </div>
  );
};

export default App;
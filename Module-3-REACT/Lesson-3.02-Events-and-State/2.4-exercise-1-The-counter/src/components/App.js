import { useState } from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
    let [counter, setCounter] = useState(0);

    const handleIncreaseButton = ev => {
        counter++
        setCounter(counter);
      };

      const handleDecreaseButton = ev => {
        counter--
        setCounter(counter);
      };

      const handleResetButton = ev => {
        setCounter(0);
      }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <form>
      <input type="button" value="Click me to increase" onClick={handleIncreaseButton}></input>
      <input type="button" value="Click me to decrease" onClick={handleDecreaseButton}></input>
      <input type="button" value="Reset" onClick={handleResetButton}></input>
      </form>
      
      
    </div>
  );
};

export default App;
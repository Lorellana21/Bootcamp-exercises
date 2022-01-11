import { useState } from "react";

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const total = parseInt(numberA) + parseInt(numberB);

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} />
        </label>
      </form>
      <p>
        La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;

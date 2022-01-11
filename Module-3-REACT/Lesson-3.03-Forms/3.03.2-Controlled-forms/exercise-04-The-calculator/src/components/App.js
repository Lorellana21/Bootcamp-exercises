import { useState } from "react";

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState("");
  const [sum, setSum] = useState("");
  const [rest, setRest] = useState("");
  const [multiply, setMultiply] = useState("");
  const [divide, setDivide] = useState("");
  //const [total, setTotal] = useState(0);
  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  let totalSum = parseInt(numberA) + parseInt(numberB);
  let totalRest = parseInt(numberA) - parseInt(numberB);
  let totalMultiply = parseInt(numberA) * parseInt(numberB);
  let totalDivide = parseInt(numberA) / parseInt(numberB);

  const handleSelectChange = (ev) => {
    setOperation(ev.target.value);
    //console.log(ev.target.value);
    if (setOperation === sum) {
      setSum(totalSum);
    } else if (setOperation === rest) {
      setRest(totalRest);
    } else if (setOperation === multiply) {
      setMultiply(totalMultiply);
    } else {
      setDivide(totalDivide);
    }
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label htmlFor="operation">Operaciones:</label>

        {/* Creamos un evento de tipo change en este select que va a ser manejada por handleSize */}
        <select name="operation" id="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="Sumar">Sumar</option>
          <option value="Restar">Restar</option>
          <option value="Multiplicar">Multiplicar</option>
          <option value="Dividir">Dividir</option>
        </select>
        <br></br>
        <br></br>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} />
        </label>
        <br></br>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} />
        </label>
      </form>
      <p>
        El resultado de {operation} <strong>{numberA}</strong> y{" "}
        <strong>{numberB}</strong> es
        <strong> {totalSum}</strong>.
      </p>
    </div>
  );
};

export default App;

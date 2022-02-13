import React from 'react';
import '../stylesheets/App.scss';
import { useState } from "react";



function App() {

  const originalNumber = [2, 5, 40, 55];//no cambia
  //esta si cambia
  const [displayedNumbers, setDisplayedNumbers] = useState(originalNumber);
  const [filterSelected, setFilterSelected] = useState("all");

  const handleClickFilter = (ev) => {
    setFilterSelected(ev.target.value)

    if (ev.target.value === "all") {
      setDisplayedNumbers(originalNumber);
    }
    else if (ev.target.value === "pairs") {
      const filteredList = originalNumber.filter((number) => number % 2 === 0);
      setDisplayedNumbers(filteredList);
    }
    else if (ev.target.value === "fiftys") {
      const filteredList = originalNumber.filter((number) => number > 50);
      setDisplayedNumbers(filteredList);

    }

  }


  //el map se le hace a displayedNumbers porque lo que se pinta no son los originales sino los ya filtrados
  const numberList = displayedNumbers.map((eachNumber) => <li>{eachNumber}</li>);

  return (
    <div className="App">

      <main className="container">
        <section className="controls">
          <h2>Selecciona un filtro:</h2>
          <label className="controls__filter" htmlFor="all"><input type="radio" onClick={handleClickFilter} name="filter" id="all" value="all" />Todos</label>
          <label className="controls__filter" htmlFor="pairs"><input type="radio" onClick={handleClickFilter} name="filter" id="pairs" value="pairs" />Pares</label>
          <label className="controls__filter" htmlFor="fiftys"><input type="radio" onClick={handleClickFilter} name="filter" id="fiftys" value="fiftys" /> &gt; 50</label>
        </section>
        <section className="results">
          <ul>
            {numberList}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
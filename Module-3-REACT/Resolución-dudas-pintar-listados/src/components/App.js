import React from "react";
import "../stylesheets/App.css";
import List from "./List";
import data from "../Data/Shows.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pintando listados</h1>
        </header>
        <main className="App-list">
          <List data={data}></List>
          {/* aqui le estoy pasando el array data al componente List */}
        </main>
      </div>
    );
  }
}

export default App;

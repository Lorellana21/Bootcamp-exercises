import React, { Component } from "react";
import "../stylesheets/App.css";
import CatList from "./CatList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CatList />
      </div>
    );
  }
}

export default App;

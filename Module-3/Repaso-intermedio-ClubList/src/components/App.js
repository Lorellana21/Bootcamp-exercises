import React from "react";
import "../stylesheets/App.scss";
import ClubList from "./ClubList.js";
import data from "../data/data.json";

const App = () => {
  return (
    <>
      <h1 className="App-title">Mis clubes favoritos</h1>
      <ClubList data={data}></ClubList>
      {/* aqui le estoy pasando el array data al componente ClubList */}
    </>
  );
};

export default App;
